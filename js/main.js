var car = {
	name: "Toyota",
	leg: 4,
	speed: 1000
}
var person = {
	name: "Fifi",
	last: "Fofo",
	eat: "Rice"
}
var user = {
	usN: "BIBI",
	password: 1234,
	email: "bobo@gamil.com"
}
function Dog(name, bark) {
	this.name = name;
	this.bark = bark;
}
var myDog = new Dog("BIBI","OOOP OOOP");
var youmi = new Dog("Fifi", "AAAP AAAP");
var myCat = {
	name: "MEO",
	bark: function(){
		return "My cat's name is" + " " +this.name;
	}
}
console.log(myCat.bark());

Dog.prototype.barking = function(){
	return "this dog's bark is" + " " + this.bark;
}
console.log(myDog.barking());
console.log(youmi.barking());