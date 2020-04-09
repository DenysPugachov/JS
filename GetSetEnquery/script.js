// === Geg & Set enquery ===

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.getAge = function() {
        return userAge;
    };
    this.setAge = function(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log("This is wrong value!!!");
        }
    };
    this.say = function() {
        console.log(`User name ${this.name}, age of user ${this.userAge}`);
    };
}

let user = new User("Den", 34);
console.log(user.name);
console.log(user.userAge);
user.say();
console.log(user.getAge());
user.setAge(33);
console.log(user.getAge());

// user.age = 20;
// console.log(user.age);
// user.name = "Alex";
// user.say();
