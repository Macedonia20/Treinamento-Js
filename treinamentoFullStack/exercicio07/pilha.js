// ## Pilha de Cartas
// Escreva um programa em javascript para simular um baralho de cartas. 
// O programa deve iniciar mostrando na tela um menu interativo contendo 
// a quantidade de cartas que estão atualmente no baralho e as opções de 
// “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar 
// uma carta”, o programa deve perguntar o nome da carta e adicioná-la no 
// topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar 
// a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
// O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.



const pilha = [];

let options = "";

do {
//   Caso queira mostra o nomne da carta que foi digitada
//   let carta = "";
//    for  (let i = 0; i < pilha.length; i++) {
//     carta += `\n${(i + 1)} ${pilha[i]}`
//    }

   options = prompt(`
   Cartas no baralho: ${pilha.length} \n 
   Escolha uma ação\n
   1- Adiconar uma carta\n
   2- Puxar uma carta\n
   3- Sair
   `)
   switch(options){
    case "1":
    const newCard = prompt("Digite o nome da sua carta")
    pilha.unshift(newCard)
    break 
    case "2":
        const pullLetter = pilha.pop()
        if(!pullLetter){
            alert("Não existe carta para retirar")
        }else {
            alert(`A carta retirada foi ${pullLetter} `)
        }
        
        break 

    case "3":
        alert("Encerrando partida...")
        break 
        default:
            alert("Opção inválida!")
   }
} while (options !== "3")



