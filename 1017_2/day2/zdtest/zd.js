var http=require("http");
var hostname = "localhost";
var port=7000;
var fs=require("fs");
var fsWrite=fs.createWriteStream("../16+6+9.txt",{"encoding":"utf8"});
// var fsRead=fs.createReadStream("../data.json",{"encoding":"utf8"});
var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset:utf-8"});

    if(res.url!="./favicon.ico"){
        // console.log(1);
        res.write("5415416");
        fsWrite.write("566");
        
        res.end();
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})