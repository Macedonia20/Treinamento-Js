function addPlayer () {
    const timeSection = document.getElementById('contacts-list') 

    const h3 = document.createElement('h3')
    h3.innerText = 'Escalação do time.'

    const ul = document.createElement('ul')

    const posicao = document.createElement('li')
      posicao.innerText = 'Informar a posição do jogador a ser escalado para o time:'
    
    const resPosicao = document.createElement('input')
      resPosicao.type = 'text'
      resPosicao.name = 'fullPosition'
      
      posicao.appendChild(resPosicao)
      ul.appendChild(posicao)


    const name = document.createElement('li')
      name.innerText = 'Informe o nome do jogador:'

      const namePlayer = document.createElement('input') 



      timeSection.append(h3, ul)
}