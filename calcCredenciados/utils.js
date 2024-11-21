
export function classificarMultiplicador(valor) {
    if (valor >= limiteBaixo && valor < limiteMedioBaixo) {
        //return "MÉDIA COMPLEXIDADE - ITEM 45";
        return document.getElementById("tabela-corpo").innerText=`${complexidadeLimiteMedio} COMPLEXIDADE - ITEM  ${numItemMedio}`; // MEDIA COMPLEXIDADE
                
    } else if (valor >= limiteMedioBaixo && valor <= limiteMedioAlto) {
        return  document.getElementById("tabela-corpo").innerText=`${complexidadeLimiteAlto} COMPLEXIDADE - ITEM  ${numItemAlto}`} //ALTA COMPLEXIDADE
      else if(valor < limiteBaixo)
        { return document.getElementById("tabela-corpo").innerText=`${complexidadeLimiteBaixo} COMPLEXIDADE - ITEM  ${numItemBaixo}`;
    } else {
        return "Fora dos limites de classificação";
    }
}

