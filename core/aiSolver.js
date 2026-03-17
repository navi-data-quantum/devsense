function aiSuggest(error) {
  if (!error) return "✅ No AI suggestions available";

  return `
🤖 AI Suggestion:
- Read the error carefully
- Check Docker containers and Node services
- Verify .env and DATABASE_URL
- If using Prisma, make sure migrations are applied
- Google the exact error message for additional solutions
`;
}

module.exports = { aiSuggest };