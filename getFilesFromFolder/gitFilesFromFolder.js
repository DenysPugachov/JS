// get files form folder
let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            let n = xmlhttp.responseText.match(/jpg/g).length / 4;
            // console.log(xmlhttp.responseText);

            for (let i = 1; i <= n; i++) {
                let img1 = document.createElement('img');
                img1.src = 'img/slider_' + i + '.jpg';
                div.append(img1);
            }
        }
    }
};
xmlhttp.open('GET', 'img/');
xmlhttp.send();
