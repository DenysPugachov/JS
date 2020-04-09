window.addEventListener('DOMContentLoaded', function() {
    // === Test localStorage ===
    // localStorage.setItem('number', 21);
    // console.log(localStorage.getItem('number'));
    // localStorage.removeItem('number');
    // localStorage.clear();

    let checkbox = document.querySelector('#rememberMe'),
        btn = document.querySelector('#btn'),
        dots = document.querySelector('.slider-dots');

    //remember checkbox
    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }
    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    //remember change button
    btn.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        dots.style.backgroundColor = '#FF4766';
    });
    if (localStorage.getItem('bg') === 'changed') {
        dots.style.backgroundColor = '#FF4766';
    }

    //write your object in localStorage
    let person = {
        name: 'Den',
        age: '34',
        tech: ['mobile', 'notebook']
    };

    let serializedPersone = JSON.stringify(person);
    localStorage.setItem('Den', serializedPersone);
    console.log(JSON.parse(localStorage.getItem('Den')));
});
