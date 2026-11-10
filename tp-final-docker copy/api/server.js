const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      status: "ok",
      msg: "API rodando no container",
      hora: new Date(),
    })
  );
});

server.listen(3000, () => console.log("API na porta 3000"));
