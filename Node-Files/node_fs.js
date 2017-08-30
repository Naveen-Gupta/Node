var fs = require('fs');

//synchronous version
//var readme = fs.readFileSync('./readme.txt', 'utf8');
//fs.writeFileSync('writeme.txt', readme);

/**
Output:
Praveen@DESKTOP-69HOUD8 MINGW32 /h/Backup2017aug/Desktop/Learning/Projects/Node/Node-Files (master)
$ node node_fs.js
hi this is synchronous version of reading file.
 */

//Asynchronous version
fs.readFile('./readme.txt', 'utf8', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log("test");  

// fs.unlink('writeme.txt'); // to delete file

/*
Output:
Praveen@DESKTOP-69HOUD8 MINGW32 /h/Backup2017aug/Desktop/Learning/Projects/Node/Node-Files (master)
$ node node_fs.js
test
hi this is asynchronous version of reading file.

## it shows asynchronous version and non-blocking io ie test is printed while it was reading from file.

*/