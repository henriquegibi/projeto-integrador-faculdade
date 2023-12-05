# Projeto Integrador Transdisciplinar de Engenharia se Software II

Esta atividade tem por finalidade realizar a entrega de atividade para o `Projeto Integrador Transdisciplinar de Engenharia se Software II`, disciplina que compõe a graduação do bacharelado em Engenharia de Software

<center><img src="https://github.com/henriquegibi/projeto-integrador-faculdade/blob/main/html/img/trabalho-faculdade.png?raw=true" alt="Fluxo da aplicação" /></center>

O sistema se trata de dois fluxos: Um de escrita de Strings, e outro de leitura das Strings que foram escritas. Tudo vai ser em REST. Caso queira testar o sistema por si só, eis o link:
> http://trabalho-faculdade.s3-website-us-east-1.amazonaws.com/

Abaixo, segue o vídeo de apresentação e demonstração de funcionamento:
> https://youtu.be/i9s2w4ig44o

## Front-end

As páginas do Front-end ficarão disponíveis ao usuário 

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

A requisição GET `\leitura` deve ser feita assim que a página for carregada ou após um POST ser executado com sucesso;

Na região GET, deve conter um campo onde o usuário pode ou não inserir uma palavra para que uma frase que contenha aquela palavra seja exibida.
- se o usuário inserir uma palavra que não exista em frase alguma, nenhuma frase deve ser exibida.
  - se existir mais de uma frase que contenha aquela palavra, estas devem ser exibidas.
- se o usuário deixar o campo vazio, todas as frases recuperadas pela requisição GET devem ser exibidas.


## Back-end

Toda estrutura de back-end ficará hospedada inicialmente numa EC2. Uma aplicação em Node.JS deverá funcionar e receber as requisições do front-end. Deve ter dois endpoints: um `escrita` e outro `leitura`. Deve existir um banco de dados MongoDB para registrar as frases.

O endpoint `escrita` deve receber a frase, guardar no banco de dados.

O endpoint `leitura` receber uma requisição vazia, e resgata no banco de dados todas as frases existentes na tabela para o front-end renderizar para o usuário no front-end conforme já foi descrito.