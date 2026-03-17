const fs = require("fs");
const path = require("path");

function checkEnv() {
  const envPath = path.join(process.cwd(), ".env");
  let logs = "";

  if (!fs.existsSync(envPath)) {
    logs += "MISSING_ENV_FILE\n";
  } else {
    const envContent = fs.readFileSync(envPath, "utf-8");
    if (!envContent.includes("DATABASE_URL")) {
      logs += "MISSING_DATABASE_URL\n";
    }
  }

  return logs;
}

module.exports = { checkEnv };