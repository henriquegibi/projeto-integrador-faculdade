document.addEventListener('DOMContentLoaded', function()
{
    const fraseInput = document.getElementById('fraseInput');
    const indiceInput = document.getElementById('indiceInput');
    const listagem = document.getElementById('lista');
    const formEscrever = document.getElementById('form-escrever');
    const formLer = document.getElementById('form-ler');
    const apiUrl = "http://34.230.29.29:3000"
    let frasesOrigem = []

    function validarEntrada(texto) {
        return texto.trim() !== '';
    }

    function getAllFrases(){
        const options = {method: 'GET'};

        fetch(apiUrl, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            listFrases(response)
            frasesOrigem = response
        })
        .catch(err => console.error(err));
    }

    getAllFrases()

    function listFrases (frases){
        const htmlContent = frases.map(item => {
            return `<div>${item.text}</div>`
        }).join('')
        listagem.innerHTML = htmlContent
    }

    function postFrase(){
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                texto: fraseInput.value
            })
          };
          
          fetch(apiUrl, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                getAllFrases()
                fraseInput.value = ''
            })
            .catch(err => console.error(err));
    }

    formEscrever.addEventListener('submit', function(event){
        event.preventDefault()
        const frase = fraseInput.value;

        if (!validarEntrada(frase)) {
            alert('Por favor, escreva algo.');
            return;
        }

        if (frase.length > 250) {
            alert('A frase deve ter no máximo 250 caracteres.');
            return;
        }

        postFrase()
    })

    formLer.addEventListener('submit', function(event){
        event.preventDefault()
        const indice = indiceInput.value;

        const filtrados = frasesOrigem.filter(item => {
            return item.text.toLowerCase().includes(indice.toLowerCase())
        })

        listFrases(filtrados)

    });
});
