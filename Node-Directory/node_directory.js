var fs = require('fs');

//fs.mkdirSync('stuff');//to make directory synchronously
//fs.rmdirSync('stuff'); //to remove directory synchronously

fs.mkdir('stuff', function(){
    fs.readFile('readme.txt','utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            fs.writeFile('./stuff/writeme.txt', data, function(){
                console.log("wrote file");
            });
        }
    });
});

// to remove directory
// fs.unlink('./stuff/writeme.txt', function(){
//     fs.rmdir('./stuff', function(){
//         console.log("stuff removed");
//     });
// });


/* 
Output:
Praveen@DESKTOP-69HOUD8 MINGW32 /h/Backup2017aug/Desktop/Learning/Projects/Node/Node-Directory (master)
$ node node_directory.js
wrote file

*/