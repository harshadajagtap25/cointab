const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
const { userController } = require("./routes/user.route");

app.get("/", (req, res) => {
  res.send("home");
});

app.use(cors());
app.use("/user", userController);

app.listen(PORT, async (req, res) => {
  try {
    await connection;
    console.log("connection established", PORT);
  } catch {
    console.log("Something went wrong");
  }
});
