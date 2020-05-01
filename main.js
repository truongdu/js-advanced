// function context & bind
var button = document.querySelector(".btn-alert");
var tom = {
	name: "TOM",
	sayHello: function() {
		alert("My name is " + this.name);
	}
};
button.addEventListener("click", tom.sayHello.bind(tom));