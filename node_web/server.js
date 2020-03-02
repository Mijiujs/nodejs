var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname
    console.log(pathname)
    fs.readFile(__dirname+pathname, function (err, data) {
        if (err) {
            console.log(err)
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write('404 Not Found')
        } else {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data.toString())
        }
        res.end()
    })
}).listen(8080)
console.log('Server running at http://127.0.0.1:8080/');
// console.log(__dirname+'\\index.html');
// fs.readFile(__dirname+'\\index.html', (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })