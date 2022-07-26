const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config(); // This allows us to call the environment variables right inside of node app

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  // req ...
  res.send("Hello, World");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
