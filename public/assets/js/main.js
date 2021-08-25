"use strict";
//menuhotdog tudo em minusculo vai dar erro se chamar de outra forma
//
let menuHotDog = document.querySelector("#menu-hotdog");
let body = document.querySelector("body");
menuHotDog.addEventListener("click", (e) => {
  //pare o comportamento padrão
  e.preventDefault();

  body.classList.toggle("open");
});

$(document).ready(function () {
  $(".caroussel-gallery").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 2000,
  });
});
