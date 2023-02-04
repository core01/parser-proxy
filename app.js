const express = require("express");

const needle = require("needle");

const app = express();

app.get("/", (req, res) => {
  if (!req.query.url) {
    return res.status(400).json({
      success: false,
      message: "Url not provided",
    });
  }
  needle.get(req.query.url, { compressed: true }, function (error, response) {
    if (!error && response.statusCode === 200) {
      res.send(response.body);
    } else {
      res.status(500).json({
        success: false,
        message: "Remote server error",
      });
    }
  });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  let response = {
    success: false,
    code: err.status || 500,
    message: err.message,
  };
  response =
    req.app.get("env") !== "production"
      ? Object.assign(response, {
          stack: err.stack,
        })
      : response;

  res.status(err.status || 500);
  res.json(response);
});

module.exports = app;
