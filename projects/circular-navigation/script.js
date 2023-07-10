let menu = document.querySelector('.menu');
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function() {
    menu.classList.toggle('active')
    menuToggle.classList.toggle('active')
}

const list = document.querySelector("li");

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active')
}

list.forEach((item) =>
    item.addeventListener('click', activeLink))