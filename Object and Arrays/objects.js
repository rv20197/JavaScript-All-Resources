// Object is a collection of Key-Value Pairs Closed in {}
console.clear()

var obj1={
    'Vatsal' : 24,
    'Jayneel' : 21

}

console.log(obj1)
console.log(typeof(obj1))

console.clear()
var car={
    name: "Verna",
    manufacturer:{
        name: "Hyundai",
        location: "India"
    },
    topspeed : 150,
    color: 'Silver',
    brakes: function() {
        setTimeout(function(){
        console.log("Car Stopped");
        },5000)
        
    }
}

console.log(car.name)
console.log(car.manufacturer.name)
console.log(car.manufacturer.location)
console.log(car.topspeed)
console.log(car.color)
console.log(car.brakes())