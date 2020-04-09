// === Moduls ===

// 1. Анонимная самовызывающаяся ф-ция(нет имени,вызывает сама себя() )
let number = 1;
(function() {
    let number = 2;
    console.log(number);
    return console.log(number + 3);
})(); //self call function();
console.log(number);

// 2. Использование обьектгного интерфейса (модуль записываем в перемунню и в нем возвращаем методы которые будут доступны с наружи)
let user = (function() {
    let privat = function() {
        console.log("I'm a privat");
    };
    return {
        sayHello: function() {
            console.log("Hello!");
        }
    };
})();
console.log(user);
console.log(user.sayHello());

// 3. все методы приватные, открываем только нужные
let user3 = (function() {
    let privat = function() {
        console.log("I'm a privat");
    };
    let sayHello = function() {
        console.log("Hello!");
    };
    return { sayHello: sayHello }; //sharing only needed methods
})();
console.log(user3);
console.log(user3.sayHello());
