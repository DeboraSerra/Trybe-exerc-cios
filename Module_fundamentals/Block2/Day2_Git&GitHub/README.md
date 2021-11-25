# Dia 2-2 - Git & GitHub - Entendendo os comandos

Nesse dia foi ensinado os comandos mais importates para trabalhar com o Git e o GitHub, como `git pull`, `git push`, `git fetch`, entre outros.

O exercício foi realizado de acordo com o especificado abaixo.

## Agora a prática

⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo _.txt_, localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.

Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋

1. Navegue até a raiz do projeto com o arquivo _.txt_;

2. Verifique se não existe nada sem _"commitar"_ utilizando `git status`:

  * Caso exista algo, verifique se é necessário e faça o `commit`, ou remova-o.

3. Crie uma nova branch com o nome _trybe-skills-changes_ e faça checkout nela;

4. No arquivo _.txt_, ao final da lista de habilidades, adicione mais duas habilidades que serão desenvolvidas na Trybe:
  * Exemplo:

	>O que eu vou aprender na Trybe:

	> - Unix
	> - Bash
	> - Git
	> - HTML
	> - CSS

  * Faça um `git add nome-do-arquivo.extensao`;

  * Você pode adicionar todos os arquivos que você modificou usando `git add .`, mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;

  * Agora um `git commit -m "Mensagem que você gostaria"`;

  * Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, `git commit -m "Adiciona nova skill"`;

  * Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;

  * E por último um `git push -u origin trybe-skills-changes`;

5. Abra um _Pull Request_ com uma descrição detalhada:

  * Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..." ;

  * O merge deve ser feito apenas quando chegar no exercício 10.

6. Retorne para a branch principal, _master_, com o comando: `git checkout master`;

7. Verifique que você está na branch _master_, com o comando: `git branch` (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);

8. Crie uma nova branch _trybe-skills-updates_ a partir da master e faça checkout nela;

9. No mesmo arquivo _.txt_ que você modificou no _passo 4_, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:

  * Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;

  * Faça um `git add nome-do-arquivo.extensao`;

  * Agora um `git commit -m "Mensagem que você gostaria"`;

  * e por último um `git push -u origin trybe-skills-updates`;

  * Após o primeiro "push" da sua branch, você pode usar apenas o comando `git push`;

  * Abra um Pull Request com uma descrição amigável:

    * O merge deve ser feito apenas quando chegar no exercício 10;

10. Agora, faça o _merge_ das branches _trybe-skills-changes_ e _trybe-skills-update_s na branch _master_, através do _Pull Request_:

  * Primeiro, vá até a página do primeiro _Pull Request_ (branch _trybe-skills-changes_) e faça o merge clicando no botão verde **"Merge pull request"**;

  * Agora, vá até página do outro _Pull Request_ (branch _trybe-skills-updates_) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;

  * Você terá que resolver esse conflito antes de "mergear" o _Pull Request_. Clique no botão **"Resolve conflicts"**, escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema). Depois clique em **"Mark as resolved"** e, em seguida, em **"Commit merge"**;

  * Agora você deve conseguir "mergear" seu _Pull Request_ normalmente. 😎
