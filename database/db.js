const mongoose = require("mongoose");

const db = "mongodb://127.0.0.1:27017/4march20";

//moongoose connection

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log("connection succeeded");
    } else {
      console.log("connection failed", err);
    }
  }
);
