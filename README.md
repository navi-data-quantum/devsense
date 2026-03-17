# DevSense
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14-green)
![CLI](https://img.shields.io/badge/type-CLI-orange)
![Status](https://img.shields.io/badge/status-active-success)

Smart CLI tool for Docker, Node.js, and Prisma troubleshooting with AI suggestions and automatic `.env` setup.

---

## Features

- Scan Docker containers and logs
- Analyze Node.js and Prisma errors
- Detect missing or misconfigured `.env` files
- Suggest fixes using pre-defined rules
- Provide AI-based troubleshooting suggestions
- Interactive CLI for applying fixes
- Automatic generation of `.env` with default values
- Generate JSON and HTML reports

---

## 🚀 Installation

Install DevSense globally from GitHub:

```bash
npm install -g git+https://github.com/navi-data-quantum/devsense.git

This command installs the DevSense CLI tool globally, making the devsense command available anywhere.

🧠 Usage
1. Run scan
cd my-project
devsense scan

DevSense automatically detects configuration issues and suggests fixes:

2. Example Output
❌ Problem: .env file is missing
💡 Cause: Configuration file not found
✅ Fix: Create a .env file in your project root

DevSense will ask interactively if you want to apply the suggested fix.

📊 Reports

After each scan, DevSense generates:

JSON report (for automation and integrations)

HTML report (for visual inspection)

Example:

devsense_reports/
├── report-xxxx.json
└── report-xxxx.html
⚙️ Requirements

Node.js v14 or higher

npm v6 or higher

Docker (optional, for container scanning)

Prisma (optional, for database checks)

📁 Project Structure
devsense
│
├── bin
├── core
├── devsense_reports
├── docs
│   └── images
│       └── scan.png
├── package.json
├── README.md
└── LICENSE
🤝 Contributing

Contributions are welcome!

Fork the repository

Create your feature branch

git checkout -b feature-name

Commit your changes

git commit -m "Add feature"

Push to your branch

git push origin feature-name

Open a Pull Request

📄 License

MIT License
