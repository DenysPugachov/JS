let inputUah = document.getElementById("uah"),
  inputEur = document.getElementById("eur");

inputUah.addEventListener("input", () => {
  let request = new XMLHttpRequest();

  request.open("GET", "current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  // traсe our request("load" => just yes/no)
  request.addEventListener("readystatechange", function() {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response); //data form sever response;
      inputEur.value = inputUah.value / data.eur; //calculate Eur
    } else {
      inputEur.value = "Somethig went wrong...";
    }
  });
});
