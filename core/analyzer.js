const rules = require("./rules");

function analyze(logs) {
  for (const rule of rules) {
    if (logs.includes(rule.match)) {
      return `
❌ Problem: ${rule.problem}
💡 Cause: ${rule.cause}
✅ Fix: ${rule.fix}
      `;
    }
  }
  return "✅ No issues detected";
}

module.exports = { analyze };