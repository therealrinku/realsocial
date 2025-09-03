const http = require("http");
const path = require("path");
const fs = require("fs");

const app = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.writeHeader(200, {"content-type": "text/html"});
    const filePath = path.join(__dirname, "./frontend/pages/index.html");
    const data = fs.readFileSync(filePath, 'utf-8');

    res.end(data);
  } else {
    res.end("peep")
  }
})

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
