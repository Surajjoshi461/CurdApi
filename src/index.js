const express = require("express");
const verbRouter = require("./routes/verbRouters");
const userRouter = require("./routes/userRouters");
const petRouter = require("./routes/petRouters");
const storeRouter = require("./routes/storeRouters");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use((req, resp, next) => {
  next();
});
app.use("/users", userRouter);

app.use("/verbs", verbRouter);
app.use("/pets", petRouter);
app.use("/stores", storeRouter);

app.get("/", (req, resp) => {
  resp.send("Hello");
});

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
