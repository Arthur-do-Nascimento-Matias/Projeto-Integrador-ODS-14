let trocarIdioma = document.getElementById("switcher")
const maxValues = {
      "14.5.1": 100,   
      "14.1.1": 50,    
      "14.6.1": 5,     
      "14.7.1": 10     
    };

    function getBarColor(percent) {
      if (percent < 40) return "#ff4c4c";   
      if (percent < 70) return "#ffcc00";  
      return "#4caf50";                     
    }

    async function carregarIndicador(indicador, descId, barId) {
      const url = `https://unstats.un.org/SDGAPI/v1/sdg/Indicator/Data?indicator=${indicador}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.data || data.data.length === 0) {
        document.getElementById(descId).innerText = "Nenhum dado encontrado.";
        return;
      }

      const globais = data.data.filter(d => d.geoAreaName === "World");
      let ano, valor, origem;

      if (globais.length > 0) {
        const maisRecente = globais.reduce((a, b) =>
          parseInt(a.timePeriodStart) > parseInt(b.timePeriodStart) ? a : b
        );
        ano = maisRecente.timePeriodStart;
        valor = parseFloat(maisRecente.value) || 0;
        origem = "World";
      } else {
        const anos = data.data.map(d => parseInt(d.timePeriodStart));
        const anoMaisRecente = Math.max(...anos);
        const dadosAno = data.data.filter(d => parseInt(d.timePeriodStart) === anoMaisRecente);
        const valores = dadosAno.map(d => parseFloat(d.value)).filter(v => !isNaN(v));
        const media = valores.reduce((a, b) => a + b, 0) / valores.length;

        ano = anoMaisRecente;
        valor = media || 0;
        if(!trocarIdioma.checked) {
        origem = `Média de ${valores.length} regiões`;
      }
      else{
        origem = `Average of ${valores.length} regions`;
      }
    }
      let percentual = Math.min(Math.round((valor / maxValues[indicador]) * 100), 100);

      if (indicador === "14.1.1") {
        percentual = 100 - percentual; 
      }
if(!trocarIdioma.checked) {
      document.getElementById(descId).innerText =
        `Ano: ${ano} | Valor: ${valor.toFixed(2)} | Fonte: ${origem} | Progresso: ${percentual}%`;
      }
else{
  document.getElementById(descId).innerText =
  `Year: ${ano} | Value: ${valor.toFixed(2)} | Font: ${origem} | Progress: ${percentual}%`;
}
      const barra = document.getElementById(barId);
      barra.style.width = percentual + "%";
      barra.style.background = getBarColor(percentual);
      barra.textContent = percentual + "%";
    }
    carregarIndicador("14.5.1", "desc-14-5-1", "bar-14-5-1");
    carregarIndicador("14.1.1", "desc-14-1-1", "bar-14-1-1");
    carregarIndicador("14.6.1", "desc-14-6-1", "bar-14-6-1");
    carregarIndicador("14.7.1", "desc-14-7-1", "bar-14-7-1");

let enUs = document.querySelectorAll(".en-us")
let ptBr = document.querySelectorAll(".pt-br")
trocarIdioma.addEventListener("change", function() {
carregarIndicador("14.5.1", "desc-14-5-1", "bar-14-5-1");
carregarIndicador("14.1.1", "desc-14-1-1", "bar-14-1-1");
carregarIndicador("14.6.1", "desc-14-6-1", "bar-14-6-1");
carregarIndicador("14.7.1", "desc-14-7-1", "bar-14-7-1");
  if(trocarIdioma.checked) {
  for (let i = 0; i < ptBr.length; i++) {
    ptBr[i].style.display = "none"
  }
  for (let i = 0; i < enUs.length; i++) {
    enUs[i].style.display = "block"
  }
  }
  else {
  for (let i = 0; i < ptBr.length; i++) {
    ptBr[i].style.display = "block"
  }
  for (let i = 0; i < enUs.length; i++) {
    enUs[i].style.display = "none"
  }
  }
})

document.querySelector("button").addEventListener("click", function(event) {
  window.location.href = "index.html";
})

function mostrar() {     
    var x = document.getElementById("recife-de-coral");
    var x2 = document.getElementById("oceano-profundo");
    var x3 = document.getElementById("zonas-costeiras");
    var x4 = document.getElementById("oceano-aberto");
  if (x.style.display === "none") {
    x.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
  } else {
    x.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
  }
}

function mostrar2() {
    var x = document.getElementById("recife-de-coral");
    var x2 = document.getElementById("oceano-profundo");
    var x3 = document.getElementById("zonas-costeiras");
    var x4 = document.getElementById("oceano-aberto");
  if (x2.style.display === "none") {
    x.style.display = "none";
    x2.style.display = "block";
    x3.style.display = "none";
    x4.style.display = "none";
  } else {
     x.style.display = "none";
    x2.style.display = "block";
    x3.style.display = "none";
    x4.style.display = "none";
  }
}

function mostrar3() {
    var x = document.getElementById("recife-de-coral");
    var x2 = document.getElementById("oceano-profundo");
    var x3 = document.getElementById("zonas-costeiras");
    var x4 = document.getElementById("oceano-aberto");
  if (x3.style.display === "none") {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "block";
    x4.style.display = "none";
  } else {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "block";
    x4.style.display = "none";
  }
}

function mostrar4() {
    var x = document.getElementById("recife-de-coral");
    var x2 = document.getElementById("oceano-profundo");
    var x3 = document.getElementById("zonas-costeiras");
    var x4 = document.getElementById("oceano-aberto");
  if (x4.style.display === "none") {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "block";
  } else {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "block";
  }
}
function mostrar5() {     
    var x = document.getElementById("tartarugaMarinha");
    var x2 = document.getElementById("tubaraoBaleia");
    var x3 = document.getElementById("elkhorn");
    var x4 = document.getElementById("baleiaAzul");
  if (x.style.display === "none") {
    x.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
  } else {
    x.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
  }
}

function mostrar6() {
    var x = document.getElementById("tartarugaMarinha");
    var x2 = document.getElementById("tubaraoBaleia");
    var x3 = document.getElementById("elkhorn");
    var x4 = document.getElementById("baleiaAzul");
  if (x2.style.display === "none") {
    x.style.display = "none";
    x2.style.display = "block";
    x3.style.display = "none";
    x4.style.display = "none";
  } else {
     x.style.display = "none";
    x2.style.display = "block";
    x3.style.display = "none";
    x4.style.display = "none";
  }
}

function mostrar7() {
    var x = document.getElementById("tartarugaMarinha");
    var x2 = document.getElementById("tubaraoBaleia");
    var x3 = document.getElementById("elkhorn");
    var x4 = document.getElementById("baleiaAzul");
  if (x3.style.display === "none") {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "block";
    x4.style.display = "none";
  } else {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "block";
    x4.style.display = "none";
  }
}

function mostrar8() {
    var x = document.getElementById("tartarugaMarinha");
    var x2 = document.getElementById("tubaraoBaleia");
    var x3 = document.getElementById("elkhorn");
    var x4 = document.getElementById("baleiaAzul");
  if (x4.style.display === "none") {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "block";
  } else {
    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "block";
  }
}
let imgs = document.querySelectorAll(".imagensSlider")
let myIndex = 0 
  for(let i=0; i < imgs.length; i++) {
    imgs[i].style.display = "none"
  }
imgs[0].style.display = "block"
document.getElementById("passarSlideDireita").addEventListener("click", function() {
  myIndex++
  if(myIndex >= imgs.length) {
    myIndex = 0
  }
    for(let i=0; i < imgs.length; i++) {
    imgs[i].style.display = "none"
  } 
  imgs[myIndex].style.display = "block" 
})
document.getElementById("passarSlideEsquerda").addEventListener("click", function() {
  myIndex--
  if(myIndex < 0) {
    myIndex = 1
  }
    for(let i=0; i < imgs.length; i++) {
    imgs[i].style.display = "none"
  } 
  imgs[myIndex].style.display = "block" 
})

let imgsGalapagos = document.querySelectorAll(".imagensSliderGalapagos")
let myIndex1 = 0 
  for(let i=0; i < imgsGalapagos.length; i++) {
    imgsGalapagos[i].style.display = "none"
  }
imgsGalapagos[0].style.display = "block"
document.getElementById("passarSlideDireita1").addEventListener("click", function() {
  myIndex1++
  if(myIndex1 >= imgsGalapagos.length) {
    myIndex1 = 0
  }
    for(let i=0; i < imgsGalapagos.length; i++) {
    imgsGalapagos[i].style.display = "none"
  } 
  imgsGalapagos[myIndex1].style.display = "block" 
})
document.getElementById("passarSlideEsquerda1").addEventListener("click", function() {
  myIndex1--
  if(myIndex1 < 0) {
    myIndex1 = 1
  }
    for(let i=0; i < imgsGalapagos.length; i++) {
    imgsGalapagos[i].style.display = "none"
  } 
  imgsGalapagos[myIndex1].style.display = "block" 
})

let imgsMaldivas = document.querySelectorAll(".imagensSliderMaldivas")
let myIndex2 = 0 
  for(let i=0; i < imgsMaldivas.length; i++) {
    imgsMaldivas[i].style.display = "none"
  }
imgsMaldivas[0].style.display = "block"
document.getElementById("passarSlideDireita2").addEventListener("click", function() {
  myIndex2++
  if(myIndex2 >= imgsMaldivas.length) {
    myIndex2 = 0
  }
    for(let i=0; i < imgsMaldivas.length; i++) {
    imgsMaldivas[i].style.display = "none"
  } 
  imgsMaldivas[myIndex2].style.display = "block" 
})
document.getElementById("passarSlideEsquerda2").addEventListener("click", function() {
  myIndex2--
  if(myIndex2 < 0) {
    myIndex2 = 1
  }
    for(let i=0; i < imgsMaldivas.length; i++) {
    imgsMaldivas[i].style.display = "none"
  } 
  imgsMaldivas[myIndex2].style.display = "block" 
})

let imgsCorais = document.querySelectorAll(".imagensSliderCorais")
let myIndex3 = 0 
  for(let i=0; i < imgsCorais.length; i++) {
    imgsCorais[i].style.display = "none"
  }
imgsCorais[0].style.display = "block"
document.getElementById("passarSlideDireita3").addEventListener("click", function() {
  myIndex3++
  if(myIndex3 >= imgsCorais.length) {
    myIndex3 = 0
  }
    for(let i=0; i < imgsCorais.length; i++) {
    imgsCorais[i].style.display = "none"
  } 
  imgsCorais[myIndex3].style.display = "block" 
})
document.getElementById("passarSlideEsquerda3").addEventListener("click", function() {
  myIndex3--
  if(myIndex3 < 0) {
    myIndex3 = 1
  }
    for(let i=0; i < imgsCorais.length; i++) {
    imgsCorais[i].style.display = "none"
  } 
  imgsCorais[myIndex3].style.display = "block" 
})

document.querySelectorAll('h1, #paragrafo-introdutorio').forEach(el => {
  el.classList.add('show');
});

const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('show'); 
    const progress = card.querySelector('.progress-bar');
    if(progress){
      progress.style.width = progress.textContent; 
    }
  }, 700 * index); 
});
  const popup = document.getElementById("popup");
  const popupTitulo = document.getElementById("popup-titulo");
  const popupDescricao = document.getElementById("popup-descricao");
  const popupLink = document.getElementById("popup-link");
  const fechar = document.getElementById("fecharPopup");
  const fechar1 = document.getElementById("fecharPopup-1");

  document.querySelectorAll(".como-ajudar a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 
      const nome = link.dataset.nome;
      const descricao = link.dataset.descricao;
      const href = link.dataset.link;

      popupTitulo.textContent = nome;
      popupDescricao.textContent = descricao;
      popupLink.href = href;

      popup.classList.add("show");
    });
  });
  fechar1.addEventListener("click", () => {
    popup.classList.remove("show");
  });
  fechar.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });


const lgPopup = document.getElementById("lg-popup");
const lgTitle = document.getElementById("lg-title");
const lgDescription = document.getElementById("lg-description");
const lgLink = document.getElementById("lg-link");
const lgClose = document.getElementById("lg-close");
 
document.querySelectorAll(".footer-liquid .social-icons a").forEach(lgIcon => {
  lgIcon.addEventListener("click", (e) => {
    e.preventDefault();
    const nome = lgIcon.dataset.lgNome;
    const descricao = lgIcon.dataset.lgDescricao;
    const href = lgIcon.dataset.lgLink;
 
    lgTitle.textContent = nome;
    lgDescription.textContent = descricao;
    lgLink.href = href;
 
    lgPopup.classList.add("show");
  });
});
 
lgClose.addEventListener("click", () => {
  lgPopup.classList.remove("show");
});
 
lgPopup.addEventListener("click", (e) => {
  if (e.target === lgPopup) {
    lgPopup.classList.remove("show");
  }
});
document.getElementById("seta").addEventListener("click", function(){
  let grafico = document.querySelector(".graficos")
  grafico.classList.toggle("ativo")
})
