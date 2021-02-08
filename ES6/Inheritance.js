/*
ES6 provides us with a keyword called extends to inherit classes.

Syntax:
class ParentClass{
	// body
}

class ChildClass extends ParenClass{
	// body
}
*/

console.clear();
// Parent Class
class Person {
	constructor(name, birthYear) {
		this.name = name;
		this.yearofBirth = birthYear;
	}

	getdetails = () => {
		return `Name: ${this.name} Age: ${2021 - this.yearofBirth}`;
	};
}

// Child Class
class Person_details extends Person {
	constructor(name, birthYear, position, city) {
		super(name, birthYear);
		this.position = position;
		this.city = city;
	}

	getdata = () => {
		console.log(
			`${this.getdetails()} Position: ${this.position} and City: ${this.city}`
		);
	};
}

let Vatsal = new Person_details('Vatsal', 1997, 'ML Engineer', 'Thane');
Vatsal.getdata();
