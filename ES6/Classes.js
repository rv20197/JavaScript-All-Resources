/*
To create object factories, you can use the class keyword.
Just like you would do in other programming languages like Java.

Syntax:
class ClassName{
    constructor(){
        // Initialize the properties here
    }
    // Methods outside constructor
    mehtods1 = () =>{
        // Method Body
    }
}

This is just syntax-sugar. behind the scenes everything still works the same.
*/
console.clear()

// Old Style
/*
function Person(name,birthYear){
    this.name = name;
    this.yearofBirth = birthYear;
    this.getdetails = function(){
        return `Name: ${this.name} and Age: ${2021-this.yearofBirth}`
    }
}
*/

class Person{
    constructor(name,birthYear){
        this.name = name;
        this.yearofBirth = birthYear;
    }

    getdetails = () => {
        return `Name: ${this.name} and Age: ${2021-this.yearofBirth}`
    }
}

let Vatsal = new Person("Vatsal",1997)
console.log(Vatsal.getdetails())