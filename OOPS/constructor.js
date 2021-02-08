/*
Constructor acts as a blueprint for the creation of the same object(instances) for n number of times.

In python or other programming language it is called as a classes
*/

function Person(Name, Job, Birthdate) {
    this.Name = Name;
    this.Job = Job;
    this.DOB = Birthdate;
}

var vatsal = new Person("Vatsal","ML Engineer", "20-01-1997")
console.log(vatsal)

var Mugdha = new Person("Mugdha","AI Engineer", "15-05-1997")
console.log(Mugdha)