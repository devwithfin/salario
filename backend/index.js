const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT;

sequelize.authenticate().then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });
