module.exports = [
  {
    match: "ECONNREFUSED",
    problem: "Database connection failed",
    cause: "PostgreSQL container is not running",
    fix: "docker compose up -d postgres"
  },
  {
    match: "port is already allocated",
    problem: "Port conflict",
    cause: "Another container is using this port",
    fix: "docker ps && docker stop <container_id>"
  },
  {
    match: "ECONNREFUSED 127.0.0.1:5432",
    problem: "Node.js cannot connect to PostgreSQL",
    cause: "Database is not running or DATABASE_URL is incorrect",
    fix: "Check your DATABASE_URL and start PostgreSQL container: docker compose up -d postgres"
  },
  {
    match: "PrismaClientInitializationError",
    problem: "Prisma cannot connect to the database",
    cause: "DATABASE_URL invalid or database not running",
    fix: "Verify DATABASE_URL and start the database container"
  },
  {
    match: "MISSING_ENV_FILE",
    problem: ".env file is missing",
    cause: "Configuration file not found",
    fix: "Create a .env file in your project root"
  },
  {
    match: "MISSING_DATABASE_URL",
    problem: "DATABASE_URL is missing",
    cause: "Environment variable DATABASE_URL is not set",
    fix: "Add DATABASE_URL in your .env file, e.g. DATABASE_URL=postgresql://user:pass@localhost:5432/db"
  }
];