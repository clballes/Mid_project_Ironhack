const body = document.querySelector('.body-loader')
fetch('/Project page_template/index-projp.html')
    .then(res => res.text())
    .then(data => {
        body.innerHTML = data
    });

let title = document.getElementById('title');
    console.log(title);

const heading = document.getElementById("sect-p");
console.log(heading);

