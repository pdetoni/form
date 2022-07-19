document.exm01.addEventListener(`submit`, submitListener);  

function criaElemento(cor, altura, largura){
    const enovo = document.createElement("div");
    enovo.textContent=`${cor} ${altura} ${largura} ${altura + largura}` ;
    document.body.appendChild(enovo);
}



function submitListener(event){
    event.preventDefault();
criaElemento(
                    document.exm01.cor.value,
             Number(document.exm01.altura.value),
             Number(document.exm01.largura.value)
             );
      document.exm01.reset();
}