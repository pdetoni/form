function criaElemento(cor, largura, altura){
    const enovo = document.createElement("div");
    enovo.textContent=`${cor} ${largura} ${altura}`;
    document.body.appendChild(enovo);
}

criaElemento(document.exm01.cor.value, document.exm01.largura.value, document.exm01.altura.value);