// const nav = document.querySelector('.nav-loader')
// fetch('/templates/navbar.html')
//     .then(res => res.text())
//     .then(data => {
//         nav.innerHTML = data
//     });

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


// json API
let placeholder = fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3"
  )
    .then((response) => response.json())
    .then((cleanResponse) => {
      let externalApiInfo = "";
      cleanResponse.forEach((post) => {
        externalApiInfo += `
              <div class="cards">
                       <img src="/project-assets/projects-section/${
                         post.id
                       }.jpg" alt="icon1" class="img-recent-proj">
                       <h5>${post.title.slice(0, 8)}</h5>
                       <p>${post.body.slice(0, 20)}...</p>
                      <a href="/Project_page_template/index-projp.html?${
                        post.id
                      }">Learn more</a>
             </div>
              `;
      });
      document.querySelector(".recent-projects").innerHTML = externalApiInfo;
    });
    
