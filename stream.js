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

//操作文件
// fs.readFile(path, function (err, data) { if (err) { } else { } }) // 异步读文件
// fs.readFileSync(path) // 同步读文件
// fs.writeFile(path,data[, options], callback) // options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
// fs.open(path,flags[,mode],callback)
// flags
// r 读，文件不存在抛出异常
// r+ 读写，文件不存在抛出异常
// rs 同步读
// rs+ 同步读写
// w 写，文件不存在则创建
// wx 写，文件存在则写入失败
// w+ 读写，文件不存在则创建
// wx+ 读写，文件存在则读写失败

// fs.open('./text.txt','r',function(err,data){
//     if(err){
//         return console.error(err)
//     }else{
//         console.log('文件打开成功')
//         fs.read(fd, buffer, offset, length, position, callback)
//         fs.close(fd, callback)
//         fs.unlink(path, callback)
//         fs.ftruncate(fd, len, callback) // 截取
//     }
// })

// fs.stat(path,function(err,stats){  // 获取文件信息
//     stats.isFile() // 是否是文件，返回boolean
//     stats.isDirectory() // 是否是目录
//     stats.isBlockDevice() // 是否是块设备
//     stats.isCharacterDevice() // 是否是字符设备
//     stats.isSymbolicLink() // 是否是软链接
//     stats.isFIFO()
//     stats.isSocket()
// })

// 创建目录
// fs.mkdir(path[, options], function (err) { 
//     if (err) {
//         console.log(err)
//     }
// })

// 读取目录
// fs.readdir(path,function(err, files){
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach( function (file){
//         console.log( file );
//     });
//  });

// 删除目录
// fs.rmdir(path, function (err) { });
