 const session = process.env.SESSION || '';
const mycode = process.env.CODE || "254114305147";
const botname = process.env.BOTNAME || 'DREADED';
const herokuAppName = process.env.HEROKU_APP_NAME || '';
const herokuApiKey = process.env.HEROKU_API_KEY || 'HRKU-96c00400-aea8-47e3-9ca4-ec1ca90d8b56';
const database = process.env.DATABASE_URL || '';

module.exports = {
  session,
  mycode,
  botname,
  database,
herokuAppName,
herokuApiKey
};