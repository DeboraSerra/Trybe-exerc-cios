# Exercícios Bloco 1 Dias 3 e 4 - Unix & Bash

### Dia 1-3 - Unix & Bash - Part 1

Nesse dia aprendi comandos básicos de acesso ao terminal do Linux.

Os exercícios soliciatados para realização foram:

#### Parte I - Criação de arquivos e diretórios

Dica : Para criação de arquivos vazios você pode utilizar o comando `touch` _nome-do-arquivo.extensao_.

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado _unix_tests_ e navegue até ele.

2. Crie um arquivo de texto com o nome _trybe.txt_.

3. Crie uma cópia do arquivo _trybe.txt_ com nome _trybe_backup.txt_.

4. Renomeie o arquivo _trybe.txt_.

5. Dentro de _unix_tests_, crie um novo diretório chamado _backup_.

6. Mova o arquivo _trybe_backup.txt_ para o diretório _backup_.

7. Dentro de _unix_tests_, crie um novo diretório chamado _backup2_.

8. Mova o arquivo _trybe_backup.txt_ da pasta _backup_ para a pasta _backup2_.

9. Apague a pasta _backup_.

10. Renomeie a pasta _backup2_ para _backup_.

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

12. Apague o diretório _backup_.

13. Limpe o terminal.

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado _skills.txt_:

Internet
Unix
Bash
HTML
CSS
javaScript
React
SQL

14. Mostre na tela as 5 primeiras skills do arquivo _skills.txt_.

15. Mostre na tela as 4 últimas skills do arquivo _skills.txt_.

16. Apague todos os arquivos que terminem em _.txt_.


#### Parte II - Manipulação & Busca

1. Na pasta _unix_tests_, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`:

`curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"`

2. Mostre todo o conteúdo do arquivo _countries.txt_ na tela.

3. Mostre o conteúdo de _countries.txt_, página por página, até encontrar a Zambia.

4. Mostre novamente o conteúdo de _countries.txt_ página por página, mas agora utilize um comando para buscar por Zambia.

5. Busque por Brazil no _countries.txt_.

6. Busque novamente por brazil, mas agora utilizando o _lower case_.

7. Para os próximos exercícios, crie um novo arquivo chamado _phrases.txt_ e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

8. Busque pelas frases que não contenham a palavra fox.

9. Conte o número de palavras do arquivo _phrases.txt_.

10. Conte o número de linhas do arquivo _phrases.txt_.

11. Crie os arquivos _empty.tbt_ e _empty.pdf_.

12. Liste todos os arquivos do diretório _unix_tests_.

13. Liste todos os arquivos que terminem com _.txt_.

14. Liste todos os arquivos que terminem com _.tbt ou .txt_.

15. Acesse o manual do comando `ls`.



### Dia 1-4 - Unix & Bash - Part 2

Nesse dia aprendi outros comandos do Linux, como comandos de Input e Output, alterar permissões de arquivos e diretórios e acessar processos em andamento, colocá-los em backgroud, pausá-los, retomá-los e encerrá-los.

Os exercícios foram divididos em quatro partes que pediam o seguinte:

#### Parte I - Comandos de Input e Output

1. Navegue até a pasta _unix_tests_;

2. Crie um arquivo texto pelo terminal com o nome _skills2.txt_ e adicione os valores Internet, Unix e Bash, um em cada linha.

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

4. Conte quantas linhas tem o arquivo _skills2.txt_.

5. Crie um arquivo chamado _top_skills.txt_ usando o _skills2.txt_, contendo as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado _phrases2.txt_ pelo terminal e adicione algumas frases de sua escolha.

7. Conte o número de linhas que contêm as letras br.

8. Conte o número de linhas que não contêm as letras br.

9. Adicione dois nomes de países ao final do arquivo _phrases2.txt_.

10. Crie um novo arquivo chamado _bunch_of_things.txt_ com os conteúdos dos arquivos _phrases2.txt_ e _countries.txt_.

11. Ordene o arquivo _bunch_of_things.txt_.


#### Parte II - Permissões

1. Navegue até a pasta _unix_tests_;

2. Rode o comando `ls -l` e veja quais as permissões dos arquivos;

3. Mude a permissão do arquivo _bunch_of_things.txt_ para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l`;

4. Resultado esperado:
	>-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

5. Tire a permissão de escrita do arquivo _bunch_of_things.txt_ para todos os usuários, verifique se está correto com o comando `ls -l`;

6. Resultado esperado:
	>-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

7. Volte a permissão do arquivo _bunch_of_things.txt_ para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt`.

8. Resultado esperado:
	>-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt


#### Parte III - Processos & Jobs

1. Liste todos os processos;

2. Agora use o comando `sleep 30 &`;

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando `sleep 30` e termine a sua execução ~~(mate o processo)~~;

4. Execute novamente o comando `sleep 30`, mas agora sem o &. Depois, faça com que ele continue executando em background;

5. Crie um processo em background que rode o comando `sleep` por 300 segundos.

6. Crie mais dois processos que rodem o comando `sleep` por 200 e 100 segundos, respectivamente.
	>Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

7. Verifique que apenas o processo `sleep 300` está em execução com o comando `jobs`. Suspenda a execução desse processo.
	>Você vai precisar trazer o processo para foreground (`fg`) e suspendê-lo (`ctrl+z`), ou enviar um sinal.

8. Retome a execução do processo `sleep 100` em background com o comando `bg`.


9. Termine a execução de todos os processos sleep ~~(mate os processos)~~.


#### (Bônus) - Parte IV - O despertar do terminal

E pra terminar com a energia ~óh~, lá no alto, que tal aprender agora alguns comandos divertidos do Unix? ☝ 🎊

1. Se você utiliza o Linux, abra o terminal e execute o comando `sudo apt-get install cmatrix`, ou para pessoas usuárias de macOS, utilize no terminal `brew install cmatrix`. Depois, execute o comando `cmatrix`. Quando estiver se sentindo como o Neo, aperte `ctrl+c` para voltar ao terminal;

2. No sistema Linux, execute o comando `sudo apt-get install fortune`, ou no macOS `brew install fortune`, e após a instalação, crie um arquivo de texto chamado _fortune.txt_ que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando `fortune`, e o operador `>`;

3. Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando `wc`;

4. Execute o comando `sudo apt-get install sl` em um terminal Linux, ou `brew install sl` em um terminal macOS. Após a instalação, execute o comando `sl`. Agora tente `sl -F`;

5. No sistema Linux, execute o comando `sudo apt-get install cowsay`, ou `brew install cowsay` no macOS. Após a instalação, execute o comando `cowsay` e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo _fortune.txt_;

6. Descubra os fatores primos usando o comando `factor` e em seguida o número _42_;

7. Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando `rev`.

8. Execute o comando `telnet towel.blinkenlights.nl` e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅

Gostou das curiosidades? Nos Recursos Adicionais tem mais alguns comandos divertidos. Confere lá!
