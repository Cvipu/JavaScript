var house2 = {};
house2["rooms"] = 3;
house2["color"] = "Pink";
house2["priceUSD"] = 10000;
// console.log(house2);
var car = {}
car.color = "Blue";
car["color"] = "Green";
car["price"] = 200;
car.price = 100;
car["No. of doors"] = 4;
car["2022"] = 1901;
//console.log(car);
var arrOfKeys = ['speed','altitude','color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: 'red'
};
for (i=0;i<arrOfKeys.length;i++){
    console.log(drone[arrOfKeys[i]]);
};