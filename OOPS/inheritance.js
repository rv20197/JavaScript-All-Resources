console.clear()
function Person(Name, Job, Birthdate) {
    this.Name = Name;
    this.Job = Job;
    this.DOB = Birthdate;
    
}

// Getter
Person.prototype.calculateAge = function(){
    console.log(2020-this.DOB)

}

// Setter
Person.prototype.UpdateBirthYear = function (birthYear) {
    this.DOB = birthYear 
}

var vatsal = new Person("Vatsal","ML Engineer", "1997")
console.log(vatsal)
vatsal.calculateAge()
vatsal.UpdateBirthYear(1996)
vatsal.calculateAge()

var Mugdha = new Person("Mugdha","AI Engineer", "1997")
console.log(Mugdha)
Mugdha.calculateAge()
Mugdha.UpdateBirthYear(1998)
Mugdha.calculateAge()

/*
Getter Methods: Used to fetch the data
Setter Methods: Used to update the data
*/