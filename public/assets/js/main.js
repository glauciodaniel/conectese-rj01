"use strict";
//menuhotdog tudo em minusculo vai dar erro se chamar de outra forma
//

let menuHotDog = document.querySelector("#menu-hotdog");
let body = document.querySelector("body");

const numero = () => {
  return parseInt(Math.random() * (9 - 0) + 0);
};
const fb = document.querySelector(".full-banner");
fb.style.backgroundImage = `url('assets/images/background/${numero()}.jpg')`;
setInterval(() => {
  fb.style.backgroundImage = `url('assets/images/background/${numero()}.jpg')`;
}, 7000);

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

  {
    id: "94298482573727342343241266457",
    categoria: 3,
    nome: "Cristo Redentor - Corcovado",
    site: "https://www.tremdocorcovado.rio/ ",
    endereco: "Parque Nacional da Tijuca- Alta da Boa Vista",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22070-000",
    urlImagem: "assets/images/gallery/94298482573727342343241266457.jpg",
    ingresso: {
      alta: 55.4,
      baixa: 38.4,
      criancas: 21.6,
      idosos: 13.1,
    },
    textoCurto:
      "Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a maior parte da cidade do Rio de Janeiro, Brasil. Em 2007 foi eleito informalmente como uma das sete maravilhas do mundo moderno",
    longitudeLatidude: "@-22.9519,-43.2105,18z",
  },

  {
    id: "7654234557654323342",
    categoria: 3,
    nome: "Praia do secreto - Recreio dos Bandeirantes",
    site: "https://www.riotur.rio",
    endereco: "Trilha saindo da Av. do Estado da Guanabara ",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22070-000",
    urlImagem: "assets/images/gallery/7654234557654323342.jpg",
    ingresso: {
      inteira: 0.0,
      meia: 0.0,
    },
    textoCurto:
      "Para chegar na Praia do Secreto é preciso fazer uma mini trilha que passa por uma parte de mato e depois chega-se a um paredão bem um pouco íngreme de uns 15 metros de altura. A entrada da trilha não é sinalizada e existem pelo menos dois pontos de início da trilha saindo da Av. do Estado da Guanabara. <br/> Logo após o Mirante da Prainha sentido Recreio já aparecem as trilhas. Recomento deixar o carro no Mirante e partir andando para a Praia do Secreto.",
    longitudeLatidude: "@-23.0187,-43.4789z",
  },

  {
    id: "234567654345678232",
    categoria: 3,
    nome: "Morro do pontal",
    site: "https://www.vidasemparedes.com.br",
    endereco: " próxima ao Posto 12 na praia do Recreio dos Bandeirantes",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22070-000",
    urlImagem: "assets/images/gallery/234567654345678232.jpg",
    ingresso: {
      inteira: 0.0,
      meia: 0.0,
    },
    textoCurto:
      "Famosa na voz de Tim Maia, ela oferece um visual incrível das praias e montanhas do Rio. E o melhor, é acessível, com trilha de pouco mais de 500 metros, e nem precisa chegar até o cume para ter uma vista bacana",
    longitudeLatidude: "@-21.0121,-48.0214,18z",
  },

  {
    id: "987656786545678244324",
    categoria: 5,
    nome: "Feira de São Cristóvão",
    site: "https://www.viagensecaminhos.com/ ",
    endereco: "R. Campo de São Cristóvão - São Cristóvão",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "20921-240",
    urlImagem: "assets/images/gallery/987656786545678244324.jpg",
    ingresso: {
      inteira: 5.0,
    },
    textoCurto:
      "O centro Luiz Gonzaga de tradições nordestinas, apresenta o melhor da arte e gastronomia, é repleto de lojinhas com produtos do nordeste brasileiro",
    longitudeLatidude: "@-22.9095,-43.182365,18z",
  },

  {
    id: "9877823782362334234523",
    categoria: 4,
    nome: "Maracanã",
    site: "https://www.riotur.rio",
    endereco: "Av. Pres. Castelo Branco, Portão 3 - Maracanã ",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22070-000",
    urlImagem: "assets/images/gallery/9877823782362334234523.jpg",
    ingresso: {
      inteira: 60.0,
      meia: 30.0,
    },
    textoCurto:
      "Estádio Jornalista Mário Filho, mais conhecido como Maracanã, ou carinhosamente como Maraca, é um estádio de futebol localizado na Zona Norte da cidade brasileira do Rio de Janeiro.",
    longitudeLatidude: "@-22.544830,-43.134367,18z",
  },

  {
    id: "9876567243432586754843872498012",
    categoria: 1,
    nome: "Museu do Amanhã",
    site: "https://www.museudoamanhã.org.br",
    endereco: "Praça Mauá, 1 - Centro",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22070-000",
    urlImagem: "assets/images/gallery/9876567243432586754843872498012.jpg",
    ingresso: {
      inteira: 0.0,
      meia: 0.0,
    },
    textoCurto:
      "O Museu do Amanhã é um museu de ciências aplicadas que explora as oportunidades e os desafios que a humanidade terá de enfrentar nas próximas décadas a partir das perspectivas da sustentabilidade e da convivência. Inaugurado em dezembro de 2015 pela Prefeitura do Rio, é um equipamento cultural da Secretaria Municipal de Cultura, que opera sob gestão do Instituto de Desenvolvimento e Gestão  O Museu foi originalmente concebido pela Fundação Roberto Marinho",
    longitudeLatidude: "@-22.8939,-43.1794,18z",
  },

  {
    id: "72397643995290253892",
    categoria: 3,
    nome: "Bondinho do Pão de Açucar",
    site: "https://www.bondinho.com.br/",
    endereco: "Av. Pasteur, 520 - Urca",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22070-000",
    urlImagem: "assets/images/gallery/72397643995290253892.jpg",
    ingresso: {
      inteira: 114.0,
      meia: 0.0,
    },
    textoCurto:
      "O bondinho do Pão de Açúcar foi construído por meio de uma ousada operação, que levou três anos (1909-1912) e envolveu cerca de 400 pessoas. Para construir a estrutura, alpinistas escalaram os morros da Urca e do Pão de Açúcar, com equipamentos em mochilas, e operários se arriscaram na edificação das estações a 400 m de altura.",
    longitudeLatidude: "@-22.9492,-43.1545,18z",
  },
];
//Criando um componente modo Raiz
// REACT - React modo raiz.

const cg = document.querySelectorAll(".caroussel-gallery");

galeria(database, cg, 0);

function bloco(cg, item, counter) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("slick-slide");
  card.setAttribute("data-slick-index", counter);

  if (counter < 0) {
    // card.classList.add("slick-cloned");
    card.setAttribute("aria-hidden", false);
  } else if (counter == 1) {
    card.classList.add("slick-current");
    card.classList.add("slick-active");
    card.setAttribute("aria-hidden", true);
  } else if (counter > 0) {
    card.classList.add("slick-active");
    // card.setAttribute("aria-hidden", true);
  }
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
}
function galeria(db, cg, filtro = 0) {
  cg.forEach((cgEl) => {
    cgEl.innerHMTL = "";

    let counter = -5;
    db.forEach((item) => {
      if (filtro > 0 && filtro == parseInt(item.categoria)) {
        bloco(cgEl, item, counter);
        console.log("com filtro!", filtro);
      } else if (filtro == 0) {
        bloco(cgEl, item, counter);
        console.log("sem filtro!", cg);
      }

      counter++;
    });
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
    // console.log(el.dataset.pontoturistico, " Foi clicado");
    cg.innerHTML = "";
    galeria(database, cg, el.dataset.pontoturistico);

    initSlick();
  });
});

function initSlick() {
  $(".caroussel-gallery").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    variableWidth: true,
    // autoplaySpeed: 2000,
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
}
$(document).ready(function () {
  initSlick();
});
