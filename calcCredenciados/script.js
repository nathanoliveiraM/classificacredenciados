
/*function classificarMultiplicador(valor) {
    const limiteBaixo = 100.00;
    const limiteMedioBaixo = 118.75;
    const limiteMedioAlto = 155.00;

    if (valor >= limiteBaixo && valor < limiteMedioBaixo) {
        return "MÉDIA COMPLEXIDADE - ITEM 45";
    } else if (valor >= limiteMedioBaixo && valor <= limiteMedioAlto) {
        return "ALTA COMPLEXIDADE - ITEM 43";
    } else if (valor < limiteBaixo) {
        return "BAIXA COMPLEXIDADE - ITEM 44";
    } else {
        return "Fora dos limites de classificação";
    }
}

document.getElementById("titulo").innerText = `Mecânicos em Geral – ${servico}`;
*/
document.getElementById("nav-tab").addEventListener("click", () => {
    const searchBar = document.getElementById("searchBar");
    // const tabelaPrincipal = document.getElementById("cabeçalho-tabela-corpo");
    // const bordasTabela = document.getElementsById("tabelaGeral");
    // const bordasTabela = document.getElementsByClassName("table-striped");
    // bordasTabela.style.visibility ="visible";

    
    searchBar.style.visibility ="visible"; // Torna visível
    tituloInicial.style.visibility="hidden";
    
   
    
    

});

let limiteBaixo, limiteMedioBaixo, limiteMedioAlto, complexidadeLimiteBaixo, complexidadeLimiteMedio, complexidadeLimiteAlto,
numItemBaixo,numItemMedio,numItemAlto;

// Função para mudar os limites e o título com base no tipo de serviço selecionado
function mudarServico(servico, min, medio, max,complexidadeLgdBaixo,complexidadeLgdMedio,complexidadeLgdAlto,nItemBaixo,nItemMedio,nItemAlto) {
    document.getElementById("titulo").innerText = `Mecânicos em Geral – ${servico}`;
     document.getElementById("serviceBand1").innerText = `ATÉ R$ ${min} : ${complexidadeLgdBaixo} COMPLEXIDADE `; 
    //  document.getElementById("serviceBand2").innerText = `DE R$ ${min+0.01} até R$ ${medio} : ${complexidadeLgdMedio} COMPLEXIDADE `;
    document.getElementById("serviceBand2").innerText = `DE R$ ${(min + 0.01).toFixed(2)} até R$ ${medio.toFixed(2)} : ${complexidadeLgdMedio} COMPLEXIDADE `;

     document.getElementById("serviceBand3").innerText = `DE R$ ${(medio+ 0.01).toFixed(2)} até  R$ ${max} :${complexidadeLgdAlto} COMPLEXIDADE `;  

     
    limiteBaixo = min;
    limiteMedioBaixo = medio;
    limiteMedioAlto = max;
    complexidadeLimiteBaixo =  complexidadeLgdBaixo;
    complexidadeLimiteMedio = complexidadeLgdMedio;
    complexidadeLimiteAlto = complexidadeLgdAlto;
    numItemBaixo = nItemBaixo;
    numItemMedio = nItemMedio;
    numItemAlto = nItemAlto;
    // document.getElementById("lgdServicoPesado".innerHTML= `ATÉ ${min} = ${complexidadeLimiteBaixo} COMPLEXIDADE`)
    //mudarServico('Caminhões', 100.00, 118.75, 155.00,'BAIXA','MEDIA','ALTA','44','45','43')
} 



function classificarMultiplicador(valor) {
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




function buscaExaustiva(numero) {
    const paresEncontrados = [];
    const valMax = limiteMedioAlto;
    

    for (let A_inteiro = 1; A_inteiro <= valMax * 100; A_inteiro++) {
        const A = A_inteiro / 100;
        const B = numero / A;

        if (Number.isInteger(B) && B <= valMax) {
            const multiplicadorA = parseFloat(A.toFixed(2));
            const multiplicadorB = parseFloat(B.toFixed(2));
            const multiplicadorTotal = parseFloat((A * B).toFixed(2));

            const classificacaoA = classificarMultiplicador(multiplicadorA);
            const classificacaoB = classificarMultiplicador(multiplicadorB);

            // Determina a classificação com base no multiplicador maior
            const classificacaoFinal = multiplicadorA >= multiplicadorB ? classificacaoA : classificacaoB;

            paresEncontrados.push({
                multiplicadorA,
                multiplicadorB,
                multiplicadorTotal,
                classificacaoFinal
            });
        }
    }

    return paresEncontrados;
}

function mudarTitulo(novoTitulo){
    document.querySelector("#titulo").innerHTML = novoTitulo;
}

function criarLinhaTabela(multiplicadorA, multiplicadorB, multiplicadorTotal, classificacaoFinal) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${multiplicadorA}</td>
        <td>${multiplicadorB}</td>
        <td>R$ ${multiplicadorTotal}</td>
        <td>${classificacaoFinal}</td>
    `;
    return linha;
}

function classificar() {
    const numeroInserido = parseFloat(document.getElementById('inputNumero').value);
    const tabelaCorpo = document.getElementById('tabela-corpo');
    
    if (isNaN(numeroInserido) || numeroInserido <= 0) {
        tabelaCorpo.innerHTML = "<div class='alert alert-danger' role='alert'>Por favor, insira um número válido.</div>";
        return;
    }

    const pares = buscaExaustiva(numeroInserido);
    tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de adicionar novas linhas

    if (pares.length > 0) {
        
        pares.sort((a, b) => b.multiplicadorA - a.multiplicadorA);

        pares.forEach(({ multiplicadorA, multiplicadorB, multiplicadorTotal, classificacaoFinal }) => {
            const linha = criarLinhaTabela(multiplicadorA, multiplicadorB, multiplicadorTotal, classificacaoFinal);
            tabelaCorpo.appendChild(linha);
        });
    } else {
        tabelaCorpo.innerHTML = `<tr><td colspan="4" class="text-center">Não consegui encontrar multiplicadores para  = ${numeroInserido}.</td></tr>`;
    }
}






// NAO APAGAR 
   
// function classificar() {
    
//     const numeroInserido = parseFloat(document.getElementById('inputNumero').value);
//     const tabelaCorpo = document.getElementById('tabela-corpo');
    
//     if (isNaN(numeroInserido) || numeroInserido <= 0) {
//         tabelaCorpo.innerHTML = "<p><div class='alert alert-danger' role='alert'>Por favor, insira um número válido.</div></p>";
        
//         return;
//     }

//     const pares = buscaExaustiva(numeroInserido);
//     tabelaCorpo.innerHTML='';
    
//     if (pares.length > 0) {
      
       
//         pares.forEach(({ multiplicadorA, multiplicadorB, multiplicadorTotal, classificacaoFinal }) => {
//             let linha = document.createElement('tr');
//             if (multiplicadorA > multiplicadorB) {
//                 linha.innerHTML =+ `<td> ${multiplicadorA}</td> 
//                                <td> ${multiplicadorB}</td>
//                                <td> R$ ${multiplicadorTotal} 
//                                <td> ${classificacaoFinal}</td>`;
//             } else {
//                 linha.innerHTML = `<td> ${multiplicadorB} </td> 
//                                <td> ${multiplicadorA} </td>
//                                <td>R$ ${multiplicadorTotal}</td>
//                                <td>${classificacaoFinal}</td>`;
//                                tabelaCorpo.appendChild(linha)
//             }
           
//         }
        
        
//     );   
        
//         tabelaCorpo.innerHTML = linha.innerHTML;
//     } else {
//         tabelaCorpo.innerHTML = `<p>Não foram encontrados pares de números (A, B) tal que A * B = ${numeroInserido}.</p>`;
//     }

    
// }
