let estado = {
cor: "#000000",
altura:0,
largura:0,
};

document.exm01.addEventListener(`submit`, submitListener);  

function criaElemento(cor, altura, largura){
    const enovo = document.createElement("div");
    enovo.textContent=`${cor} ${altura} ${largura} ${altura + largura}` ;
    enovo.style=`color: ${cor};}`
    document.body.appendChild(enovo);
}



function submitListener(event){
    event.preventDefault();
             estado_cor = document.exm01.cor.value,
             estado_altura = Number(document.exm01.altura.value),
             estado_largura = Number(document.exm01.largura.value)

             criaElemento(estado.cor, estado.altura, estado.largura);
             
      document.exm01.reset();
}