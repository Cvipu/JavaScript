var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.4;
function currencyCalculator(amount,rate){
    return amount*rate;
}
currencyTwo = currencyCalculator(currencyOne,exchangeRate);
console.log(currencyTwo);