#!/usr/bin/env node

const { program } = require("commander");
const { analyze } = require("../core/analyzer");
const { checkEnv } = require("../core/envChecker");
const { aiSuggest } = require("../core/aiSolver");
const { askUser } = require("../core/interactive");
const { saveReport } = require("../core/report");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

program
  .command("scan")
  .description("Scan Docker, Node.js, Prisma logs, .env, suggest AI solutions, and generate reports")
  .action(async () => {
    let dockerLogs = "";
    try {
      const containers = execSync("docker ps --format '{{.Names}}'", { encoding: "utf-8" })
        .split("\n")
        .filter(Boolean);
      for (const c of containers) {
        const logs = execSync(`docker logs ${c}`, { encoding: "utf-8" });
        dockerLogs += `\n[${c}]\n` + logs;
      }
    } catch {
      dockerLogs = "";
    }

    let nodeLogs = "";
    try {
      const logDir = "logs";
      if (fs.existsSync(logDir)) {
        const files = fs.readdirSync(logDir).filter(f => f.endsWith(".log"));
        for (const f of files) {
          nodeLogs += `\n[${f}]\n` + fs.readFileSync(path.join(logDir, f), "utf-8");
        }
      }
    } catch {
      nodeLogs = "";
    }

    const envLogs = checkEnv();
    const allLogs = dockerLogs + "\n" + nodeLogs + "\n" + envLogs;

    const result = analyze(allLogs || "");
    console.log(result);

    const reportPathJSON = saveReport(result, "json");
    const reportPathHTML = saveReport(result, "html");
    console.log(`📄 Reports saved:\n- JSON: ${reportPathJSON}\n- HTML: ${reportPathHTML}`);

    if (result.includes("No issues detected") === false) {
      console.log(aiSuggest(allLogs));
      const fixApplied = await askUser(result);
      if (fixApplied) {
        try {
          if (result.includes("docker compose up")) execSync("docker compose up -d", { stdio: "inherit" });
          console.log("✅ Fix applied!");
        } catch (error) {
          console.log("❌ Could not apply fix automatically:", error.message);
        }
      }
    }
  });

program.parse();