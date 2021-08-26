const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "localhost";

// const server = http.createServer((req, res) => {
//   console.log("A request is made");
// });

// server.listen(port, hostname, () => {
//   console.log(`listening on port ${port}`);
// });

// const server = http.createServer((req, res) => {
//   console.log("request url", req.url);
//   console.log("request method", req.method);
// });

// server.listen(port, hostname, () => {
//   console.log(`listening on port ${port}`);
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("Welcome");
//   res.end();
// });
// server.listen(port, hostname, () => {
//   console.log(`listening on port ${port}`);
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write("<h1>Welcome<h1>");
//   res.end();
// });
// server.listen(port, hostname, () => {
//   console.log(`listening on port ${port}`);
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   fs.readFile("./views/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });
// server.listen(port, hostname, () => {
//   console.log(`listening on port ${port}`);
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   fs.readFile("./views/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });
// });
// server.listen(port, hostname, () => {
//   console.log(`listening on port ${port}`);
// });

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let route = "./views/";
  switch (req.url) {
    case "/":
      route += "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
    case "/Contact":
      route += "contact.html";
      res.statusCode = 200;
      break;
    case "/contact-us":
      res.setHeader("Location", "/contact");
      res.statusCode = 301;
      res.end();
      break;
    default:
      route += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
