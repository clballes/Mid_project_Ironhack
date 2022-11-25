// Getting ID from window object
let projNum = window.location.search.split("?")[1];
console.log(projNum);
//DOM elements
let pTitle = document.querySelector(".main-section h1");
let pText = document.querySelector(".project-body");

const dynamicPage = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; data.length; i++) {
        if (projNum == data[i].id) {
          pTitle.innerText = data[i].title;
          pText.innerText = data[i].body;
          document.getElementsByTagName(
            "img"
          )[1].src = `/project-assets/projects-section/${data[i].id}.jpg`;
        }
      }
    })
    .catch((err) => console.log(err));
};

dynamicPage();

// Dynamic Pages
let projectCards = document.querySelectorAll(".cards");

const addEndPoint = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
    .then((response) => response.json())
    .then((projectInfo) => {
      for (let i = 0; i < projectInfo.length; i++) {
        projectCards[i].setAttribute(
          "href",
          `Project_page_template/index-projp.html?` + projectInfo[i].id
        );
      }
    })
    .catch((err) => console.log(err));
};

addEndPoint();
