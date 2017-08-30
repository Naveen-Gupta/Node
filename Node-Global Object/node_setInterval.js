var time = 0;
setInterval(function(){
	time += 2;
	console.log('runs after '+ time + 'second');
}, 2000);


/*
Output:
Naveen@Naveen-PC MINGW32 ~/Desktop/Learning/Projects/Node
$ node node_setInterval.js
runs every 2second
runs every 4second
runs every 6second
runs every 8second
runs every 10second
runs every 12second
...
 ...
 
*/