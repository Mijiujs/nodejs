let http = require('http')
let options = {
    host: 'localhost',
    port: '8080',
    path: '/index.html'
}
let callback = function (res) {
    let body = ''
    res.on('data', function (data) {
        body += data
    })
    res.on('end', function () {
        console.log(body)
    })
}
let req = http.request(options, callback)
req.end()