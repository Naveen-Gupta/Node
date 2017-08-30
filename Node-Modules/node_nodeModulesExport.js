var counter = function(arr){
	return "There are " + arr.length + " elements in array";
}

var adder = function(a, b){
	return `Sum of 2 and 2 = ${ a + b }`;
}

var varHello = "Hello";

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.varHello = varHello;

module.exports= {
	counter: counter,
    adder:  adder,
	varHello: varHello
}
