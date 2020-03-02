let fs = require('fs')

// 输出流
// let rs = fs.createReadStream(url,encoding)
// rs.on('data',function(){})
// rs.on('end',function(){})
// rs.on('error',function(){})

// 输入流
// let ws = fs.createWriteStream('./write.txt')
// ws.write(data,encoding)
// ws.end()
// ws.on('finish',function(){})
// ws.on('error',function(){})

// 管道流
// rs.pipe(ws)

// 链式流
// 压缩文件
// let zlib = require('zlib')
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
//解压文件
// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('input.txt'));