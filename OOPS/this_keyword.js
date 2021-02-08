console.clear();
var Job = "AI Engineer"

var person = {
    Name : "Vatsal",
    Job : "ML Engineer",

    getName: function(){
        console.log(this.Name)
    },

    getJob: function(){
        console.log(Job)// Points to global Job 
        console.log(this.Job) // Points to the Local Job present in obj person
    },

    company:{
        Name : "Google",

        getName: function(){
            console.log(this.Name)
        },
    }
}


person.getName();
person.getJob();
person.company.getName();