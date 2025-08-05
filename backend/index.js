const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT;

 async function connectWithRetry(retries = 10) {
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log("Database connected");

      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
      });
      break;
    } catch (err) {
      console.log(`DB not ready. Retrying in 5s... (${retries} retries left)`);
      retries--;
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  if (retries === 0) {
    console.error("Failed to connect to DB after multiple attempts.");
    process.exit(1);
  }
}

connectWithRetry();
