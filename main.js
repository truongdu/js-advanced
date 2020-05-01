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