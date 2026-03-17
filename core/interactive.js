const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

async function askUser(fix) {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "applyFix",
      message: `Do you want to apply this fix?\n${fix}\n`,
      default: false
    }
  ]);

  if (answers.applyFix) {
    const envPath = path.join(process.cwd(), ".env");
    if (!fs.existsSync(envPath)) {
      const defaultEnv = `
# DevSense auto-generated .env
DATABASE_URL=postgresql://user:password@localhost:5432/db
NODE_ENV=development
PORT=5000
`;
      fs.writeFileSync(envPath, defaultEnv.trim());
      console.log("✅ .env file created with default values!");
    } else {
      console.log("✅ .env already exists, nothing changed.");
    }
  }

  return answers.applyFix;
}

module.exports = { askUser };