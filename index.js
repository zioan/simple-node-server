const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("index.html");
const aboutPage = fs.readFileSync("about.html");
const contactPage = fs.readFileSync("contact.html");
const notFoundPage = fs.readFileSync("notFound.html");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(homePage);
  } else if (req.url === "/about") {
    res.end(aboutPage);
  } else if (req.url === "/contact") {
    res.end(contactPage);
  } else {
    res.writeHead(404);
    res.end(notFoundPage);
  }
  // console.log(req.url);
});

server.listen(3000);
//$ node index.js
