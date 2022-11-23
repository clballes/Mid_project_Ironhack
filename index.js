const nav = document.querySelector('.nav-loader')
fetch('/templates/navbar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    });

const footer = document.querySelector('.footer-loader')
fetch('/templates/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data
    });

const questions = document.querySelector('.questions-loader')
    fetch('/templates/quest&ans.html')
        .then(res => res.text())
        .then(data => {
            questions.innerHTML = data
    });
