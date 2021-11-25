# Exercícios Bloco 1 Dias 3 e 4 - Unix & Bash

Nos dias 3 e 4 do Bloco 1 foram ensinados comandos para serem utilizados no terminal do Linux para agilizar o trabalho em desenvolvimento web.

Nessa pasta encontram-se os arquivos produzidos nos exercícios propostos nos dois dias e na pasta Dia3-_resolução-exercícios estão os códigos utilizados.

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
