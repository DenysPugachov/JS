let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function getData() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader(
                'Content-type',
                'application/json; charset=utf-8'
            );

            request.onload = function() {
                if (request.status == 200) {
                    resolve(request);
                } else {
                    reject(new Error('Somethin wet wrong...', request));
                }
            };
            request.send();
        });
    }

    getData()
        .then(req => {
            let data = JSON.parse(req.response);
            if (isNaN(inputRub.value)) {
                //check input
                inputUsd.value = 'Only numbers!';
            } else {
                inputUsd.value = inputRub.value / data.usd;
            }
            return req;
        })
        .then(req => console.log(req.statusText, req.status))
        .catch(error => {
            inputUsd.value = error;
        })
        .finally(console.log('finally work!'));
});
