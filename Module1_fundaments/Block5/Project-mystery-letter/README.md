# Bonus project - Mystery letter

The project Mystery letter was created using the directions below. To use it you have to type any text inside the input and click the button to generate the letter. If you want to change the style of the any word you just have to click it until you are satisfied with the style.

1. There must be an input with id="carta-texto" where the user can type the content of the letter.

2. There must be a paragraph with id="carta-gerada" whre the user will see the result of the letter.

3. There must be a button with id="criar-carta" amd when you click it, the letter must be generated.

> Important points:

>* Each word must apear inside a tag `span`.
>* The tags `span` must be added as childre to the paragraph `carta-gerada`.

4. When you create a aletter throw the button with id="criar-carta", the input `carta-texto` must remain with the text typed.

5. If the user doesn't type the field or type only spaces, the message 'Por favor, digite o conteúdo da carta.' must apear as response.

6. Create the class `newspaper` with the following properties:
>* `background-color` with the value `antiquewhite`
>* `font-family` with the value `Times New Roman`
>* `font-weight` with the value `bold`

7. Create the class `magazine1` with the properties:

>* `background-color` with the value `teal`
>* `color` with the value `white`
>* `font-family` with the value `Verdana`
>* `font-weight` with the value `900`
>* `text-transform` with the value `uppercase`

8. Create the class `magazine2` with the properties:

>* `background-image` with the image `images/pink-pattern.png`
>* `color` with the value `fuchsia`
>* `font-family` with the value `Verdana`
>* `font-weight` with the value `900`

9. Create the class `medium` with the properties:

>* `font-size` with the value `20px`
>* `padding` with the value `8px`

10. Create the class `big` with the properties:

>* `font-size` with the value `30px`
>* `padding` with the value `10px`

11 - Crie a classe reallybig.
Pontos importantes:

* Defina as propriedades:
  - `font-size` com o valor `40px`
  - `padding` com o valor `15px`
O que será verificado:

Será validado se a classe reallybig possui a propriedade font-size igual a "40px"

Será validado se a classe reallybig possui a propriedade padding igual a "15px"

12 - Crie a classe rotateleft.
Pontos importantes:

* Defina as propriedades:
  - `transform` com o valor `rotate(-5deg)`
O que será verificado:

Será validado se a classe rotateleft possui a propriedade transform igual a "matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)"
13 - Crie a classe rotateright.
Pontos importantes:

* Defina as propriedades:
  - `transform` com o valor `rotate(5deg)`
O que será verificado:

Será validado se a classe rotateright possui a propriedade transform igual a "matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)"
14 - Crie a classe skewleft.
Pontos importantes:

* Defina as propriedades:
  - `transform` com o valor `skewX(10deg)`;
O que será verificado:

Será validado se a classe skewleft possui a propriedade transform igual a "matrix(1, 0, 0.176327, 1, 0, 0)"
15 - Crie a classe skewright.
Pontos importantes:

* Defina as propriedades:
  - `transform` com o valor `skewX(-10deg)`;
O que será verificado:

erá validado se a classe skewright possui a propriedade transform igual a "matrix(1, 0, -0.176327, 1, 0, 0)"
16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.
Pontos importantes:

* As classes devem ser adicionadas às tags `span` de forma **aleatória**.
* Sempre adicione mais de uma classe em uma palavra.
* Utilize as classes:
  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

  Não é necessário utilizar classes de todos os grupos em uma palavra, mas **não** utilize mais de uma classe do mesmo grupo.
  Ou seja, se você utilizar as classes `magazine1` e `skewright` em uma palavra, as classes `newspaper`, `magazine2`, `skeleft` não devem ser usadas para essa mesma palavra.
O que será verificado:

Será validado se ao criar uma carta ela recebe uma lista de classes aleatórias

Será validado se ao criar uma segunda carta ela recebe uma lista de classes aleatórias

Será validado se as classes das duas cartas não são exatamente iguais

Requisitos Bônus:
17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela
Pontos importantes:

* Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
* O número de mudanças deve ser ilimitado;
O que será verificado:

Será validado se ao clicar em uma carta uma nova lista aleatória de classes é gerada

Será validado se ao clicar novamente na mesma carta uma nova lista aleatória de classes é gerada e se a nova lista é diferente da lista anterior

18 - Deve haver um parágrafo com o id="carta-contador" onde existirá um contador de palavras
Pontos importantes:

* Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.
O que será verificado:

Será validado que existe um elemento p com o id="carta-contador"

Será validado se ao criar uma carta o elemento p com o `id="carta-contador" é atualizado com o número de palavras da carta (valor numérico).