const http = require('http')
const url = require('url')
// const querystring = require('querystring')

function onRequest(request, response) {
    if (url.parse(request.url).pathname !== '/favicon.ico') {
        let pathname = url.parse(request.url).pathname
        let query = url.parse(request.url, true).query
        console.log(query)
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
}
http.createServer(onRequest).listen(8888)
console.log('Server running at http://127.0.0.1:8888')