
let car = {
    make: "Toyoto",
    model: "23456",
    year: 2025,
    start : function(){
        console.log("The Car has stars" + this.model);
    }
}

console.log(car.start());


