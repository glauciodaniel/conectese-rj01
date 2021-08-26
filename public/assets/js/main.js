"use strict";
//menuhotdog tudo em minusculo vai dar erro se chamar de outra forma
//
let menuHotDog = document.querySelector("#menu-hotdog");
let body = document.querySelector("body");

//simulando um banco de dados

/**
 * ID: 4234295898549659854
 * Nome: Museu Nacional de Belas Artes
 * Site: https://www.mnba.gov.br/
 * Endereço: Av. Rio Branco, 199 - Centro, Rio de Janeiro - RJ, 20040-008
 * Foto: https://images.app.goo.gl/fX1WzMX4ucPFUFad7
 * Ingresso: R$ 8,00 (inteira), R$ 4,00 (meia)
 * Texto com um parágrafo: Situado tuado no centro histórico do Rio de Janeiro, criado em 13 de janeiro de 1937, o Museu Nacional de Belas Artes possui atualmente um acervo com mais 16 mil peças. Abriga gigantesco obras de arte brasileira do século XVII ao século XX, e obras de artistas estrangeiros, entre pinturas, esculturas e desenhos. Possui ainda uma coleção de arte popular brasileira, arte africana e mobiliário.
 * Longitude e Latitude: 22° 54' 31.422" S 43° 10' 33.424" O
 * */
//JSON - JavaScript Object Notation
let database = [
  {
    id: "4234295898549659854",
    categoria: 1,
    nome: "Museu Nacional de Belas Artes",
    site: "https://www.mnba.gov.br/",
    endereco: "Av. Rio Branco, 199 - Centro",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "20040-008",
    urlImagem: "assets/images/gallery/4234295898549659854.jpg",
    ingresso: {
      inteira: 8.0,
      meia: 4.0,
    },
    textoCurto:
      "Situado tuado no centro histórico do Rio de Janeiro, criado em 13 de janeiro de 1937, o Museu Nacional de Belas Artes possui atualmente um acervo com mais 16 mil peças. Abriga gigantesco obras de arte brasileira do século XVII ao século XX, e obras de artistas estrangeiros, entre pinturas, esculturas e desenhos. Possui ainda uma coleção de arte popular brasileira, arte africana e mobiliário.",
    longitudeLatidude: "@-22.9085393,-43.1767665,18z",
  },

  {
    id: "994382216866168123871",
    categoria: 3,
    nome: "Praia de Copacabana",
    site: "https://www.riotur.rio",
    endereco: "Avenida Atlântica, Copacabana ",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22070-000",
    urlImagem: "assets/images/gallery/994382216866168123871.jpg",
    ingresso: {
      inteira: 0.0,
      meia: 0.0,
    },
    textoCurto:
      "A praia carioca reflete um pouco o do que é o Rio de Janeiro,  um local alto astral, com uma beleza natural ímpar. A praia é cumprida e tem uma longa faixa de areia, que durante o verão fica lotada de pessoas",
    longitudeLatidude: "@-22.970722,-43.182365,18z",
  },
];
//Criando um componente modo Raiz
// REACT - React modo raiz.
galeria(database);

const cg = document.querySelector(".caroussel-gallery");
const card = document.createElement("div");
card.classList.add("card");

function galeria(db, filtro = 0) {
  db.forEach((item) => {
    if (filtro > 0 && filtro == parseInt(item.categoria)) {
      card.innerHTML = `
                    <div class="gallery-picture">
                    <img src="${item.urlImagem}" alt="galeria"/>
                        <div class="gallery-ellipse">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#333333A0"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        </div>
                    </div>
                    <h2>${item.nome}</h2>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                            fill="#BCBCBC">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        ${item.cidade} - ${item.estado} 
                    </h3>
  `;
      cg.appendChild(card);
    } else {
    }
  });
}

menuHotDog.addEventListener("click", (e) => {
  //pare o comportamento padrão
  e.preventDefault();

  body.classList.toggle("open");
});

let linkGallery = document.querySelectorAll(".link-slider a");

function removeActive(element) {
  element.forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
  });
}
linkGallery.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    removeActive(linkGallery);
    el.classList.toggle("active");
    console.log(el.dataset.pontoturistico, " Foi clicado");
    galeria(database, el.dataset.pontoturistico);
  });
});

$(document).ready(function () {
  $(".caroussel-gallery").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    appendArrows: ".caroussel-gallery",
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
