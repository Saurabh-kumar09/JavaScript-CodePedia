//onclick circular naviagtion

let menu = document.querySelector('.menu');
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function() {
    menu.classList.toggle('active')
    menuToggle.classList.toggle('active')
}

//Icons movement
const list = document.querySelectorAll("li");

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active')
}

list.forEach((item) =>
    item.addEventListener('click', activeLink))