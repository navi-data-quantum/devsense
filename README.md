DevSense
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14-green)
![CLI](https://img.shields.io/badge/type-CLI-orange)
![Status](https://img.shields.io/badge/status-active-success)



Smart CLI tool for Docker, Node.js, and Prisma troubleshooting with AI suggestions and automatic .env setup.

Features

Scan Docker containers and logs.

Analyze Node.js and Prisma errors.

Detect missing or misconfigured .env files.

Suggest fixes using pre-defined rules.

Provide AI-based troubleshooting suggestions.

Interactive CLI for applying fixes.

Automatic generation of .env with default values.

Generate JSON and HTML reports.

Installation

Install DevSense globally from GitHub:

npm install -g git+https://github.com/navi-data-quantum/devsense.git

This command installs the DevSense CLI tool globally, making the devsense command available anywhere.

Usage

Run a scan in your project directory:

devsense scan

DevSense will analyze your project for configuration, environment, and runtime issues.

It will detect missing .env files and suggest automatic fixes.

Reports are generated in the devsense_reports folder in JSON and HTML formats.

Example

cd my-project
devsense scan

Output Example

❌ Problem: .env file is missing
💡 Cause: Configuration file not found
✅ Fix: Create a .env file in your project root

DevSense will ask interactively if you want to apply the suggested fix.

Requirements

Node.js v14 or higher

npm v6 or higher

Docker (optional for container scanning)

Prisma (optional for database checks)

Project Structure

devsense
│
├── bin
├── core
├── devsense_reports
├── package.json
├── README.md
└── LICENSE

Contributing

Contributions are welcome!

Fork the repository

Create your feature branch

Commit your changes

Push to your branch

Open a Pull Request

License

This project is licensed under the MIT License.