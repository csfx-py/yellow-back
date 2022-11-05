require("dotenv").config();

const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(morgan("dev"));

const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const authRouter = require("./Routes/Auth");
const splitwiseRouter = require("./Routes/Splitwise");

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to DB");
  }
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRouter);
app.use("/splitwise", splitwiseRouter);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
