let allExported = require("./node_nodeModulesExport");

console.log(allExported.counter(["Sachin", "Sehwag", "Dravid"]));
console.log(allExported.adder(2, 2));
console.log(allExported.varHello);

/*

Output:
Praveen@DESKTOP-69HOUD8 MINGW32 /h/Backup2017aug/Desktop/Learning/Projects/Node/Node-Modules (master)
$ node node_nodeModulesRequire.js
There are 3 elements in array
Sum of 2 and 2 = 4
Hello

*/