const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const movieRouter = require("./routes/moviesRoutes");
const commentRouter = require("./routes/commentsRoutes");
const userRouter = require("./routes/userRoutes");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", movieRouter);
app.use("/", commentRouter);
app.use("/", userRouter);
mongoose
  .connect(
    "mongodb+srv://chatbot:chatbot@cluster0.h1gpe.mongodb.net/AppMovie",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .catch((err) => console.log(err));

app.use(express.static("./dist"));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/" });
});

app.listen(PORT, () => {
  console.log("app running on port " + PORT);
});
