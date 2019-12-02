---
title: Como ler cores em hexadecimal
date: "2019-11-23T23:46:37.121Z"
description: "Eu trabalho com front-end já faz alguns anos e se tem uma coisa que eu sempre tive que lidar são cores em hexadecimal. Nesse texto eu compartilho o que aprendi e deixo uma ~surpresa~ no final."
---

Trabalho com front-end já faz alguns anos e se tem uma coisa que sempre tive que lidar são cores em hexadecimal.

\#FF2354, #454ACC, #C0FFEE, você sabe do que estou falando.

Recentemente uma coisa começou a me incomodar, apesar de usar esse tipo de representação por ANOS, nunca fui capaz de identificar uma cor mais diferentona em hexadecimal.

Isso acaba hoje.

##Antes de tudo, porque utilizamos esse formato para descrever cores?

Tem a ver com biologia, ótica, matemática e mais outras coisas.

Vamos lá, se você não tem nenhum tipo de daltonismo seu olho só vê vermelho (R), verde (G) e azul (B). As outras cores seu cérebro interpreta a partir desses três estímulos primários.

A tela em que você está lendo esse post exibe cores da mesma maneira, calibrando diferentes **profundidades** de R, G e B em cada _pixel_ para exibir uma determinada cor.

Mas nem sempre foi assim...

Para entender melhor a importância da palavra **profundidade** nessa explicação, imagine que você tem a sua disposição apenas um ponto de luz vermelho (R), um verde (G) e um azul (B). 

Combinando essas luzes você chega, _no máximo_, em oito variações:

- Preto = R, G e B apagados
- Vermelho = R aceso, G e B apagados
- Verde = G aceso, R e B apagados
- Azul = B aceso, R e G apagados
- Amarelo = R + G acessos, B apagado
- Magenta = R + B acesos, G apagado
- Ciano = G + B acesos, R apagado
- Branco = R, G e B acesos

O que é uma quantidade minúscula de cor... Mas ainda assim é meio complicado de explicar o que está acontecendo.

Felizmente existe um modo muito mais eficiente de representar coisas que pode estar ligadas ou desligadas: 

**bits!**

Vamos fazer um exercício mental, separe um bit para vermelho, outro para verde e um último para azul. 0 é apagado e 1 é aceso, beleza?

E assim nós temos:

- 000 = Preto
- 100 = Vermelho
- 010 = Verde 
- 001 = Azul
- 110 = Amarelo
- 101 = Magenta
- 011 = Ciano
- 111 = Branco

_Isso está começando a ficar familiar..._

Essa maneira de representar cores em 3 bits é conhecida (para a surpresa de ninguém) como _3-bit color_ e foi utilizada em computadores pessoais da década de oitenta como o Macintosh SE, ZX Spectrum e o BBC Micro.

Mas o ser humano é ambicioso, oito cores numa tela é muito pouco. E única maneira de aumentar o número de cores é aumentando a **profundidade** das primárias.

Imagine agora que ao invés usar apenas **um bit** para vermelho (R), apagado e aceso, você tem **dois bits** e usa eles da seguinte forma:

- 00 = R 0% aceso
- 01 = R 33% aceso
- 10 = R 66% aceso
- 11 = R 100% aceso

Repita a mesma coisa para verde (G) e azul (B), somando **seis bits** por cor final.

Essa profundidade adicional nas cores primárias agora te permite fazer novas combinações, responsáveis [por essa paleta de cores](https://lospec.com/palette-list/6-bit-rgb) e pelas cores do [Master System](https://en.wikipedia.org/wiki/Master_System#Technical_specifications)!

Percebeu como é **exponencial**? 

Sair do _3-bit color_ para o _6-bit color_ aumentou o número de cores possíveis de oito para sessenta quatro! Já está ficando difícil arrumar um nome para cada uma delas.

Eu só preciso te contar uma coisa... 

Cores na internet (e na maioria dos dispositivos eletrônicos na verdade) seguem um padrão chamado [sRGB](https://en.wikipedia.org/wiki/SRGB), criado pela Microsoft e pela IBM em 1996.

Esse padrão define uma **profundidade de cor** de _24-bits_, ou seja, oito bits para cada cor, totalizando 256 variações de R, de G e de B.

O que dá por alto assim umas dezesseis milhões de cores. Isso é literalmente mais cor do que nossos olhos conseguem distinguir.

Imagina só, escrever essas cores em bits seria loucura! Arrumar um nome para cada cor seria absolutamente impraticável!  

Se liga nessa cor _24-bits_, por exemplo. Escrevi ela em binário, hexadecimal e nome único que acabei de inventar:

- Binário: 11110000 01011100 00001111 
- Hexadecimal: F05C0F
- Nome único: Laranja Laranjoso Laranjito, o Alaranjado

Deu pra ver qual forma é melhor de representar né?

Utilizamos hexadecimal para definir cores porque é a maneira mais eficiente de escolher **uma** entre mais de **dezesseis milhões** de cores disponíveis!

##Decodificando o trio hexadecimal

Agora que você entendeu o porquê da coisa (eu espero) vamos para a parte divertida. 

Antes vamos só alinhar expectativas porque o objetivo aqui é ter uma ideia aproximada da cor. Você não vai sair desse texto, olhar para o #233E25 e gritar “VERDE ALGA”.

Mas se você levar em consideração as regras a seguir fica muito mais fácil. E talvez essa habilidade seja útil se você estiver flertando com uma pessoa que gosta de cores e tecnologia.

Vamos lá, atenção para o uso dos termos **dupla**, e **destaque**:

1 - Se **uma dupla** é muito mais alta que as outras, essa é a cor de **destaque**. Por exemplo:

- \#**FF**2A2A - Muito mais R do que G e B. Tom de vermelho.
- \#CC**EE**CC - Muito mais G do que R e B. Tom de verde.


2 - Se **duas duplas** são muito mais altas, a cor de **destaque** é uma cor secundária. 

Lembrando, R + G = Amarelo (Y), R + B = Magenta (M), G + B  = Ciano (C).

- \#**DEDE**3A - R e G altos, B baixo. Tom de amarelo.
- \#2B**F1F1** - G e B altos, R baixo. Tom de ciano.

3 - Se as **três duplas** de caracteres forem iguais, não existe nenhum **destaque**, então só pode ser preto, branco ou cinza. Por exemplo:

- \#000000 - Preto
- \#3A3A3A - Cinza escuro, valores mais baixos
- \#DEDEDE - Cinza claro, valores mais altos
- \#FFFFFF - Branco

4 - Quanto **mais alto o valor** do **destaque**, mais iluminado o resultado. Por exemplo:

- \#**FFFF**00 - Amarelo absoluto
- \#**9999**00 - Amarelo mais escuro
- \#**1111**00 - Amarelo praticamente preto

5 - MAS, se o **destaque** não for assim tão grande fica tudo meio acinzentado, com cores menos vivas, lembra da regra 3? Por exemplo:

- \#**FFFF**DD - Amarelo clarinho, tom pastel. 

Ou seja, se você pegar #FFFFFF e tirar um pouco de Azul, a mistura de Vermelho e Verde prevalece, e a cor começa a tender ao Amarelo!

6 - E pra fechar, se **uma dupla** for alta (FF), **a outra** média (88) e outra baixa (00) você vai precisar de ajuda porque aí o negócio complica...

Pensa aqui comigo, se quantidades iguais de Vermelho (R) e Verde (G) criam Amarelo (Y), que cor você acha é que é #FF8800?

Pare e pense por alguns instantes antes de seguir com o texto.

_pausa para pensar_

_pausa para pensar._

_pausa para pensar.._

_pausa para pensar..._

_pausa para pensar...._

_pausa para pensar....._

_é sério, tenta adivinhar, namoral_

_pausa para pensar....._

_ok, vamos nessa_

Se você chutou que é laranja pode passar na recepção e tirar seu prêmio. 

\#FF8800 dá essa cor porque tem todo o R possível, mas só metade do G, o que puxa a combinação cromática mais para o vermelho.

Invertendo a ordem você fica com #88FF00, metade do R e todo G possível, o que dá um charmoso verde amarelado.

##Vamos aprender na prática

Pronto, e foi assim que te ensinei tudo o que aprendi sobre cores em hexadecimal. 

Vale lembrar que eu só toquei bem de leve no assunto "cores em dispositivos digitais". De modo geral acabei me surpreendendo em relação a o quão complexo e interessante é esse assunto.

Mas vamos lá, chega de lenga lenga, vamos ver se tu aprendeu mesmo.

[Clica aqui](https://paladini.dev/hexadexa) pra jogar um joguinho de adivinhar cor.

As regras estão no link, se fizer mais de 10 pontos _sem chutar_ eu te pago um sorvete.

Comentários são pelo Twitter, [me segue lá](https://paladini.dev/hexadexa)<a>.