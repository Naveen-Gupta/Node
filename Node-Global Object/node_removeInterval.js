var time = 0;
var timer = setInterval(function(){
	time += 2;
	console.log('runs after '+ time + 'second');
	if(time>5){
		clearInterval(timer);
	}
}, 2000);


/*
Output:

Naveen@Naveen-PC MINGW32 ~/Desktop/Learning/Projects/Node
$ node node_removeInterval.js
runs after 2second
runs after 4second
runs after 6second

*/