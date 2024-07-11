const express = require("express");
require("express-async-errors");
const gsRouter = require("./routes/gsRouter.js");
const hhRouter = require("./routes/hhRouter.js");

const app = express();
const port = 5601;

// 全局返回头
app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  let allUrls = ["/iot/"];
  res.send(allUrls);
});

//router的总的调用方法
app.use("/iot", gsRouter);
app.use("/hhwe-waste-platform-mini/api/client/upload", hhRouter);

//全局报错处理
app.use(function (err, req, res, next) {
  return res.json({ code: 500, message: "服务器异常" });
});

//启用方法
app.listen(port, () => {
  console.log(`Now, app listening on port ${port}`);
});
