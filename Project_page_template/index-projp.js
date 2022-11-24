// const body = document.querySelector('.body-loader')
// fetch('/Project page_template/index-projp.html')
//     .then(res => res.text())
//     .then(data => {
//         body.innerHTML = data
//     });

let holder = fetch('/Project_page_template/projects.json')
    .then((response) => response.json())
    .then((cleanResponse) => {
        let internalApiInfo = "";
        cleanResponse.forEach(element => {
            internalApiInfo += 
            `
            <h1>${element.title}</h1>
                <div class="main-section-div">
                    <p id="sect-p">Completed on June 22, 2021</p>
                    <p id="sect-p1">${element.category}</p>
                </div>
                <div id="img-pg">
                    <img id="main-section1" src="${element.image}" alt="project-icon1">
                    <p>
                        ${element.body}
                    </p>
                </div>
            `   
        })
        document.querySelector('.main-section').innerHTML = internalApiInfo;
    });
