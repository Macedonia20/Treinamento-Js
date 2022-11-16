const name = prompt('Qual é o seu nome?');
let cidades = "";
let contagem = 0;

let visitedSomeCity = prompt('Ja visitou alguma cidade? \n Responda: (1-Sim ou 2-Não)');



while(visitedSomeCity === "1") {
    const city = prompt('Qual cidade?');
    `${cidades += "-", city}`

    console.log(cidades)


    contagem++

    visitedSomeCity = prompt('Voce visitou alguma outra cidade? 1-sim ou 2-nao')
}

alert(` Turista: ${name} \n
        Quantidade de cidades visitadas: ${contagem}
        Cidades visitadas: ${cidades}` 
    )




