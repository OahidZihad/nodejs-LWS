const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello folks....");
    res.write(" how are you doing???");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about us page");
    res.end();
  } else {
    res.write("Not found");
    res.end();
  }
});

server.listen(4000);
console.log("listeing on port 4000");
