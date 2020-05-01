// function context & bind
var button = document.querySelector(".btn-alert");
var tom = {
	name: "TOM",
	sayHello: function() {
		// alert("My name is " + this.name);
		alert(`My name is ${this.name}`); // chac viet thu 2 ko dung noi chuoi, co the xuong hang duoc.
	}
};
button.addEventListener("click", tom.sayHello.bind(tom));

// arguments demo
function sum(){
	let result = 0;
	for (let i = 0 ; i < arguments.length; i++) {
		result += arguments[i];
	}	
	return result;
}
console.log(sum(1,2,3,4,6,12,7,5,4));

