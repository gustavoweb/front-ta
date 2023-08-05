// consumo_api.js
// Fazendo a requisição GET à API com o axios
axios.get('https://teavalia.cyclic.app/questions')
  .then(response => {
    // Sucesso - processar a resposta
    const data = response.data
    const responseContainer = document.getElementById('response-container')

    // Loop através dos objetos da API e preenche a tabela
    data.forEach(item => {
      //const itemID = item._id
      //console.log(itemID)

      const itemTitle = document.createElement('div')
      itemTitle.textContent = item.title

      const itemIMG = document.createElement('div')
      itemIMG.textContent = item.img_comp
      
      const itemRespA = document.createElement('div')
      itemRespA.textContent = item.resp_a

      const itemRespB = document.createElement('div')
      itemRespB.textContent = item.resp_b

      const itemRespC = document.createElement('div')
      itemRespC.textContent = item.resp_c

      const itemRespD = document.createElement('div')
      itemRespD.textContent = item.resp_d

      const itemRespE = document.createElement('div')
      itemRespE.textContent = item.resp_e

      const itemRespCorreta = document.createElement('div')
      itemRespCorreta.textContent = item.resp_correta

      const itemAutor = document.createElement('div')
      itemAutor.textContent = item.autor

      const itemCitacao = document.createElement('div')
      itemCitacao.textContent = item.citacao

      const itemCurso = document.createElement('div')
      itemCurso.textContent = item.curso

      const itemDisciplina = document.createElement('div')
      itemDisciplina.textContent = item.disciplina

      //const itemOBS = item.obs
      //console.log(itemOBS)

      // Adiciona os elementos à tabela
      responseContainer.appendChild(itemTitle)
      responseContainer.appendChild(itemIMG)
      responseContainer.appendChild(itemRespA)
      responseContainer.appendChild(itemRespB)
      responseContainer.appendChild(itemRespC)
      responseContainer.appendChild(itemRespD)
      responseContainer.appendChild(itemRespE)
      responseContainer.appendChild(itemRespCorreta)
      responseContainer.appendChild(itemAutor)
      responseContainer.appendChild(itemCitacao)
      responseContainer.appendChild(itemCurso)
      responseContainer.appendChild(itemDisciplina)
    });
  })
  .catch(error => {
    // Erro - lidar com o erro
    console.error('Erro ao buscar dados da API:', error)
  })
