const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// server.use(bodyParser);
server.use((req, res, next) => {
  if (
    req.path.startsWith("/parents") &&
    req.headers["authorization"] !== "Bearer 12345"
  ) {
    res.status(401).json("Unauthorized");
  } 
    next();
});
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});
