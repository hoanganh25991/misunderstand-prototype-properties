const Person = function(name, age){
	console.log(this);
	return {name, age};
}

const Person2 = function(name, age){
	console.log(this);
	this.name = name;
	this.age = age;
}

const Person3 = () => {
	console.log(this);
	this.name = name;
	this.age = age;
}

let p = Person('4', 4);
let p1 = Person2('4', 4);
let p3 = new Person2('4', 4);
let p4 = new Person3('4', 4);

//Object.create copy BOTH prototype & properties
//Which cause a lot of misunderstand on prototyp
let copyOfp3 = Object.create(p3);