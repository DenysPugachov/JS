//Enheritense (exemple cofferMashine)
// '_' => защищенное св-во
// "#" => приватное св-во

class CoffeeMachine {
    _waterAmount = 0;
    // #waterLimit = 0;// new feature (need polifill)

    setWaterAmount(value) {
        // set waterAmount
        if (value < 0) throw new Error("Negative amount of water!!!");
        this._waterAmount = value;
    }

    getWaterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

    getPower() {
        //get poewer
        return this._power;
    }
}

//create coffeeMachine
// let coffeeMachine = new CoffeeMachine(100);

//fill the water
// coffeeMachine.waterAmount = -200;

let coffeeMachine = new CoffeeMachine(300);
coffeeMachine.setWaterAmount(199);
// coffeeMachine.setWaterAmount(477);
console.log(`Power of new coffeeMachine: ${coffeeMachine.getPower()}W`);
console.log(`Current amount of water is ${coffeeMachine.getWaterAmount()}`);

console.log(`Current amount of water is ${coffeeMachine.getWaterAmount()}`);
