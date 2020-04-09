let form = document.querySelector('.main-form'),
    contForm = document.querySelector('#form'),
    input = document.getElementsByTagName('input'),
    statusMassage = document.createElement('div'),
    message = {
        loading: 'Lodading...',
        success: 'Thanks. We will contact you soon!',
        failure: 'Somethig went wrong...'
    };

statusMassage.classList.add('status');
statusMassage.classList.add('snow');

//fucnction send form to PHP sever
function sendFormData(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault(); //prevent default sending requerst
        formElement.appendChild(statusMassage);

        let formData = new FormData(formElement),
            obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let jsonData = JSON.stringify(obj);

        function postData(data) {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader(
                    'Content-type',
                    'application/json; charset=utf-8'
                );

                request.onreadystatechange = function() {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 3) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };
                request.send(data);
            });
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(jsonData)
            .then(() => (statusMassage.innerHTML = message.loading))
            .then(() => (statusMassage.innerHTML = message.success))
            .catch(() => (statusMassage.innerHTML = massage.failure))
            .then(clearInput);
    });
}
sendFormData(form);
sendFormData(contForm);
