document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    // Incluir o tratamento para o campo 'input file'
    const imgCompFile = document.getElementById('img-comp').files[0]
    formData.append('img-comp', imgCompFile);

    // Chamar a função de envio para a API Node.js
    sendQuestionToAPI(formData)
  })

  async function sendQuestionToAPI(formData) {
    try {
      const response = await fetch('https://teavalia.cyclic.app/questions', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        alert('Pergunta cadastrada com sucesso!')
      } else {
        const errorMessage = await response.text()
        alert(`Erro ao cadastrar a pergunta: ${errorMessage}`)
      }
    } catch (error) {
      alert(`Erro ao conectar com a API: ${error.message}`)
    }
  }

    class Question {
        constructor(formData) {
          this.title = formData.get('title')
          this.description = formData.get('description')
          this.options = [
            formData.get('resp_a'),
            formData.get('resp_b'),
            formData.get('resp_c'),
            formData.get('resp_d'),
            formData.get('resp_e'),
          ]
          this.correctOption = parseInt(formData.get('resp_correta'))
          this.author = formData.get('autor')
          this.link = formData.get('link')
          this.course = formData.get('curso')
          this.subject = formData.get('disciplina')
          this.observations = formData.get('obs')
        }
      }
      
      // Exemplo de uso:
      document.getElementById('questionForm').addEventListener('submit', function(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const question = new Question(formData)
        sendQuestionToAPI(question)
      })
      