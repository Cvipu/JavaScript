var car = {};
car.color = "red";
car.mileage = 97854;
console.log(car);
car.turnkey = function(){
    console.log("engine running");
}
console.log(car);
car.lightsOn = function(){
    console.log("Lights are On!");
}
car.turnkey();
console.log(car);
car.lightsOn();