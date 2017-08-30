function callFunction(func){
	func();
}

var sayHello = function(){
	console.log("Hello");
}

callFunction(sayHello);

/*

Output:
Naveen@Naveen-PC MINGW32 ~/Desktop/Learning/Projects/Node
$ node node_functionExpression
Hello

*/