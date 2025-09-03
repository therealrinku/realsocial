const http = require("http");
const path = require("path");
const fs = require("fs");

const app = http.createServer((req,res)=>{
  switch(req.url) {
    case '/': {
      // res.writeHeader(200, {"content-type": "text/html"});
      const data = fs.readFileSync(path.join(__dirname, "./frontend/pages/index.html"), 'utf-8');
      return res.end(data);
    }
    case "/insights" : {
      // res.writeHeader(200, {"content-type": "text/html"});
      const data = fs.readFileSync(path.join(__dirname, "./frontend/pages/insights.html"), 'utf-8');
      return res.end(data);
    }
    default: {
      return res.end("pong");
    }
  }
})

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
