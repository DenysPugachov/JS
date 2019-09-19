let form = document.querySelector(".main-form"),
  contForm = document.querySelector("#form");

//fucnction end form to PHP sever
function sendFormData(formElement) {
  let message = {
    loading: "Lodading...",
    success: "Thanks. We will contact you soon!",
    failure: "Somethig went wrong..."
  };

  let input = document.getElementsByTagName("input"),
    statusMassage = document.createElement("div");

  statusMassage.classList.add("status");

  formElement.addEventListener("submit", function(e) {
    e.preventDefault(); //prevent default sending requerst
    formElement.appendChild(statusMassage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");

    let formData = new FormData(formElement);

    let obj = {};
    formData.forEach(function(value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", function() {
      if (request.readyState < 4) {
        statusMassage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMassage.innerHTML = message.success;
      } else {
        statusMassage.innerHTML = massage.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  });
}
sendFormData(form);
sendFormData(contForm);
