# Projeto Integrador Transdisciplinar de Engenharia se Software II

Esta atividade tem por finalidade realizar a entrega de atividade para o `Projeto Integrador Transdisciplinar de Engenharia se Software II`, disciplina que compõe a graduação do bacharelado em Engenharia de Software

<center><img src="https://github.com/henriquegibi/projeto-integrador-faculdade/blob/main/outros/projeto1.png?raw=true" alt="Fluxo da aplicação" /></center>

O sistema se trata de dois fluxos: Um de escrita de Strings, e outro de leitura das Strings que foram escritas. Tudo vai ser em REST.

## Front-end

Para atender o front-end, deverá existir no back-end dois endpoints:
- `\escrita` para a requisição POST que é a de escrita
- `\leitura` para a requisição GET que é a de leitura

O usuário irá utilizar um front-end escrito em HTML, CSS e JavaScript que deverá enviar a requisição. Neste front-end deverá haver duas regiões visivelmente distintas (talvez separadas por div distintas com um fundo de cor diferente): uma para fazer a escrita, e outra para fazer a leitura. No front-end estas duas regiões devem estar separadas nitidamente com o auxílio de código css.

### Post

Na região do POST `\escrita`, deve conter um campo para o usuário digitar a frase que ele deseja guardar de até 250 caracteres, e um botão para enviar a requisição POST.
- se o campo para escrever a frase estiver vazio, ao tentar enviar a requisição o usuário deve receber um alerta dizendo para ele escrever alguma coisa. Deverá existir uma função em JavaScript dedicada para executar esta tarefa.
- se a requisição tiver mais de 250 caracteres, ao tentar enviar a requisição o usuário deve receber um alerta dizendo que a requisição deve conter no máximo 250 caracteres. Deverá existir uma função em JavaScript dedicada para executar esta tarefa.

A requisição POST apenas deve ser enviada para o end-point `escrita` se estas duas condições citadas forem verdadeiras. A requisição deve ter o corpo do tipo `json` contendo uma chave "escrita" cujo o valor é o que o usuário escreveu no campo onde ele deveria ter escrito a frase de até 250 caracteres.

Caso o back-end responda que a frase foi gravada com sucesso (falaremos dele logo), o usuário deverá receber um alerta dizendo: "Frase escrita com sucesso: índice X" sendo X um índice (número inteiro) que deverá ser informado pelo back-end. Caso o back-end não responda (time-out) ou responda que o arquivo não foi armazenado (neste caso enviando o índice "0" e o front-end deverá interpretar que 000 significa que a frase não foi armazenada), o usuário deve receber um alerta dizendo "Não foi possível armazenar o arquivo, tente novamente mais tarde".

### Get

Na região GET `\leitura`, deve conter um campo "índice" onde o usuário deve inserir um número inteiro de 3 dígitos, e um botão para enviar a requisição GET de leitura.
- se o usuário inserir um índice de apenas um número inteiro mas escrever com dois zeros na frente, antes do front-end de enviar a requisição, deve ser removido os dois dígitos zeros antes do valor. Exemplo: o usuário digitou "006", mas o front-end vai enviar na requisição o valor "6"
- se o usuário inserir um índice de apenas dois números inteiros mas escrever com um zero na frente, antes do front-end de enviar a requisição, deve ser removido este dígito zero antes do valor. Exemplo: o usuário digitou "052", mas o front-end vai enviar na requisição o valor "52"
- se o usuário tentar enviar um caractere que não seja um número inteiro, ao tentar enviar a requisição ele deve receber um alerta dizendo para escrever apenas números.
- se o usuário tentar enviar 4 ou mais dígitos, ao tentar enviar a requisição ele deve receber um alerta dizendo: "Dígitos máximos permitidos: 3"

A requisição GET de leitura só deve ser enviada para o end-point `leitura` se o usuário digitar 1, 2 ou 3 dígitos numéricos no campo "índice" e mesmo assim o front-end deve fazer as devidas tratativas para os caso de digitar 1 ou 2 dígitos. A requisição deve ter o corpo tipo `json` e enviar a chave "index" com o valor de três dígitos números inteiros que foi preenchido pelo usuário no campo "índice".

Neste caso, o back-end responderá com a frase referente a este índice (que estará guardada em um banco de dados MySQL) num `json` de chave "frase" e valor a referida frase. O front-end deverá renderizar no DOM a frase recebida pelo back-end para o usuário poder lê-la. Caso o índice não seja válido, o back-end retornará no JSON a chave "frase" com o valor "null" e o front-end deve interpretar este "null" e renderizar um alerta para o usuário dizendo que o índice informado não é válido.

## Back-end

Toda estrutura de back-end ficará hospedada inicialmente na `localhost`. Uma aplicação Java com Spring Boot deverá funcionar e receber as requisições do front-end. Deve ter dois endpoints: um `escrita` e outro `leitura`. Deve existir um banco de dados MySQL funcionando numa porta diferente, também na `localhost`.

O endpoint `escrita` deve receber a frase, guardar no banco de dados. No banco de dados, o MySQL deve responder em qual índice foi escrito a frase e responder para o back-end este índice, e então o back-end deve enviar para o front-end este índice para o front-end poder renderizar a informação para o usuário conforme já foi descrito. Se por alguma razão o back-end não tiver resposta do banco de dados ou não ser possível guardar no banco a referida frase, o back-end deverá enviar para o front-end o índice 0 que o front vai interpretar e enviar um alerta dizendo "Não foi possível armazenar o arquivo, tente novamente mais tarde".

O endpoint `leitura` deve receber o índice numérico, e resgatar no banco de dados qual seria a frase referente àquele índice na tabela para o front-end renderizar para o usuário no front-end conforme já foi descrito.