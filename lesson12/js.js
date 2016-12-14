///**
// * Created by rastych on 12/11/16.
// */
//const CoffeeMachine = function (coffeeAmount, waterAmount) {
//    this._coffeeAmount = coffeeAmount;
//    this._waterAmount = waterAmount;
//};
//
//CoffeeMachine.prototype.prepareEspresso = function () {
//    this._coffeeAmount -=10;
//    this._waterAmount -=50;
//    console.log('Brew Coffee...');
//    console.log('Espresso prepared');
//};
//
//CoffeeMachine.prototype.setCoffee = function(newCoffeeAmount) {
//    this._coffeeAmount += newCoffeeAmount;
//};
//
//CoffeeMachine.prototype.getCoffeeAmount = function () {
//    return this._coffeeAmount;
//}
//
//const saeco = new CoffeeMachine(400, 2000);
//const philips = new CoffeeMachine(100, 500);
//
//philips.prepareEspresso();

//const cat = {
//    name: 'Vasya';
//    age: 10;
//};
//
//cat.prototype = function () {
//    this.color = 'red';
//    this.type = 'siamka';
//}

class Cat {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    Action(action) {
        this._action = action;
    }
}
