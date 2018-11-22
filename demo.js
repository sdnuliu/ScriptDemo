var fs = require('fs')

 var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
 var indexContent = '<!DOCTYPE>'+'\r\n'+'<title>Hello</title>'+'\r\n'+'<h1>Hi</h1>'
 var cssContent='h1{color: red;}'
 var jsContent='var string = "Hello World"'+'\r\n'+'alert(string)'

 fs.access("./"+dirName,function(err){
 	if(!err){
       console.log('the file was already existed.');
 	   process.exit(0)
    }
 	if (err.code=="ENOENT") {
 		fs.mkdirSync("./" + dirName) // mkdir $1
 		process.chdir("./" + dirName) // cd $1
 		fs.mkdirSync('css') // mkdir css
 		fs.mkdirSync('js') // mkdir js

 		fs.writeFileSync("./index.html", indexContent)
 		fs.writeFileSync("css/style.css", cssContent)
 		fs.writeFileSync("./js/main.js", jsContent)
 		process.exit(0)
 	}
 });



 