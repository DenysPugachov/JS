describe("pow(x,n)", function() {
    //для отрицательных и дробных n возвращает NaN
    describe("для отрицательных и дробных n", function() {
        it("для отрицательных n возвращает NaN", function() {
            //assert.isNaN проверка того, что переданное значение равно NaN.
            assert.isNaN(pow(2, -1));
        });

        it("для дробных n возвращает NaN", function() {
            assert.isNaN(pow(2, 1.5));
        });
    });

    describe("возводит x в степень 3", function() {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });
    describe("возводит x в степень 4", function() {
        function makeTest(x) {
            let expected = x ** 4;
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 4), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });
    describe("возводит x в степень 5", function() {
        function makeTest(x) {
            let expected = x ** 5;
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 5), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    // ... другие тесты. Можно писать и describe, и it блоки.
    //   Вложенные describe образуют новую подгруппу тестов. В результатах мы можем видеть дополнительные отступы в названиях.
});
describe("тест-log(console)", function() {
    before(() => console.log("Тестирование началось – перед тестами"));
    after(() => console.log("Тестирование закончилось – после всех тестов"));

    beforeEach(() => console.log("Перед тестом – начинаем выполнять тест"));
    afterEach(() => console.log("После теста – заканчиваем выполнение теста"));

    it("тест 1", () => console.log(1));
    it("тест 2", () => console.log(2));
});

// assert.equal(value1, value2) – проверяет равенство value1 == value2.
// assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
// assert.notEqual, assert.notStrictEqual – проверяет неравенство и строгое неравенство соответственно.
// assert.isTrue(value) – проверяет, что value === true
// assert.isFalse(value) – проверяет, что value === false
