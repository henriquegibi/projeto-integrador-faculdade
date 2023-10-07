document.addEventListener('DOMContentLoaded', function () {
    const escreverButton = document.getElementById('escreverButton');
    const lerButton = document.getElementById('lerButton');
    const fraseInput = document.getElementById('fraseInput');
    const indiceInput = document.getElementById('indiceInput');
    const fraseResultado = document.getElementById('fraseResultado');

    // Função para validar entrada vazia
    function validarEntrada(texto) {
        return texto.trim() !== '';
    }

    // Função para validar índice
    function validarIndice(indice) {
        return /^[0-9]{1,3}$/.test(indice);
    }

    // Evento de clique para escrever frase
    escreverButton.addEventListener('click', function () {
        const frase = fraseInput.value;

        if (!validarEntrada(frase)) {
            alert('Por favor, escreva algo.');
            return;
        }

        if (frase.length > 250) {
            alert('A frase deve ter no máximo 250 caracteres.');
            return;
        }

        // Enviar a requisição AJAX para o endpoint de escrita
        // Você precisa implementar a chamada AJAX aqui
        // Exemplo: fetch('/escrita', { method: 'POST', body: JSON.stringify({ escrita: frase }) })

        // Após receber a resposta do back-end, exibir o alerta ou mensagem adequada
    });

    // Evento de clique para ler frase
    lerButton.addEventListener('click', function () {
        const indice = indiceInput.value;

        if (!validarIndice(indice)) {
            alert('Digite um índice numérico válido (1 a 999).');
            return;
        }

        // Enviar a requisição AJAX para o endpoint de leitura com o índice
        // Você precisa implementar a chamada AJAX aqui
        // Exemplo: fetch(`/leitura/${indice}`, { method: 'GET' })

        // Após receber a resposta do back-end, exibir a frase ou mensagem adequada
        // Exemplo: fraseResultado.innerText = 'Frase lida: ' + respostaDoBackend.frase;
    });
});
