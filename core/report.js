const fs = require("fs");
const path = require("path");

function saveReport(logAnalysis, format = "json") {
  const reportsDir = path.join(process.cwd(), "devsense_reports");
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  
  if (format === "json") {
    const filePath = path.join(reportsDir, `report-${timestamp}.json`);
    fs.writeFileSync(filePath, JSON.stringify({ timestamp, analysis: logAnalysis }, null, 2));
    return filePath;
  } else if (format === "html") {
    const htmlContent = `
    <html>
      <head><title>DevSense Report</title></head>
      <body>
        <h1>DevSense Report - ${timestamp}</h1>
        <pre>${logAnalysis}</pre>
      </body>
    </html>`;
    const filePath = path.join(reportsDir, `report-${timestamp}.html`);
    fs.writeFileSync(filePath, htmlContent);
    return filePath;
  }
}

module.exports = { saveReport };