let arr100 = Array.from(Array(100).keys());
// console.log(arr100);

function fooBazz(array) {
    let arrayFooBazz = [];

    arr100.forEach(item => {
        if (item % 3 == 0 && item % 5 == 0 && item) {
            arrayFooBazz.push('fooBazz');
        } else if (item % 5 == 0 && item) {
            arrayFooBazz.push('Bazz');
        } else if (item % 3 == 0 && item) {
            arrayFooBazz.push('foo');
        } else {
            arrayFooBazz.push(item);
        }
    });
    console.log(arrayFooBazz);
}
fooBazz(arr100);
