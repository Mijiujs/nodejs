const http = require('http')
const url = require('url')
const router = require('./router')
const querystring = require('querystring')

const postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

console.log(__filename)
function onreq(req, res) {
    if (url.parse(req.url).pathname !== '/favicon.ico') {
        let pathname = url.parse(req.url).pathname
        let query = url.parse(req.url, true).query
        router.route(pathname)
        // res.writeHead(200, { 'Content-Type': 'text/plain' })
        // res.write('11')
        // res.end()

        let body = ''
        req.on('data', function (chunk) {
            body += chunk
        })
        req.on('end', function () {
            body = querystring.parse(body);
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
            if (body.name && body.url) {
                res.write('网站名：' + body.name + '<br>' + '网站url：' + body.url)
            } else {
                res.write(postHTML)
            }
            res.end();
        });
    }
}
http.createServer(onreq).listen(8888)

console.log('http://127.0.0.1:8888')