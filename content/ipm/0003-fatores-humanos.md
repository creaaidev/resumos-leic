---
title: Fatores Humanos
description: Fatores Humanos
  MPH Card.
  Lei de Fitts.
  Lei de Hick.
  Lei de Stu Card.
  Lei de Weber.
  lei de Miller.
  Lei de Jakob.
  Lei de Tesler.
  Efeito estética-usabilidade.
  Regra do pico final.
path: /ipm/fatores-humanos
type: content
---

# Fatores Humanos

```toc

```

## O Modelo de processamento humano de Card

Nos anos 80, Stuart Card e colegas aplicaram psicologia cognitiva a experiências com computadores, isto é queriam resumir o comportamneto humano a uma máquina, que deu origem a um livro fundamental: [The Psychology of Human-Computer Interaction](https://books.google.pt/books/about/The_Psychology_of_Human_Computer_Interac.html?id=iUtaDwAAQBAJ). A ideia principal deste livro era defiinir o cérebro humano como uma máquina de três sentidos: **visão, audição e toque** (sistema motor), ou seja definir o cérebro humano comum sistema de percepção.

![Visão, Audição e Toque](./assets/0003-visao-audicao-toque.svg#dark=3)

É possível descrever o ser humano como um humúnculo sensorial visto que os nosso sentidos não são todos iguais. Somos mais sensíveis nas maõs ou no paladar do que nas costas ou braços. Em termos de movimento não podemos dizer que o ser humano é uma máquina sequencial de movimento mas sim uma **"máquina de previsão do futuro"** (acreditamos que tudo o que vamos fazer vai acontecer), visto que os nossos sentidos estão todos interligados. É por essa razão que conseguimos mudar o que estamos a ouvir, apesar do áudio não mudar, meramente porque o [movimento da boca de alguém também mudou](https://www.youtube.com/watch?v=G-lN8vWm3m0), ou porque nos é difícil de identificar a cor de um palavra que descrever outra cor.

![Nomes das cores, mas coloridos com a cor errada](./assets/0003-colored-words.png#dark=2)

### Sistema motor

O sistema motor tem comunicações com o tempo, isto é, o nosso tempo de resposta de cada sentido é diferente, havendo sentidos que são mais sensíevis (como o sentido auditivo) e outros menos, como é o caso da dor.

| [**Sentido**](color:blue) | [**Tempo**](color:blue) |
| ------------------------- | ----------------------- |
| Visual                    | 200 ms                  |
| Auditivo                  | 150 ms                  |
| Dor                       | 700 ms                  |

### Sistema Cognitivo

O sistema cognitivo representa as nossas memórias, há algumas zonas do nosso cérebro que estão organizadas em camadas mas é difícil dizer qual a zona que está encarregue da memória a curto ou longo prazo. À medida que o ser humano foi evoluindo, o seu cérebro também foi, assim como as nossas capacidades cognitivas, Atualmente, uma pessoa consegue recordar **sete bocados** de informação, mais ou menos dois, seja cada bocado uma unidade simples, letra, frase, palavra, dígito, etc, em termos de memória a curto prazo e podemos guardar infinita informação em termos de memória a longo prazo. Contudo, só nos conseguimos lembrar de informação a longo prazo através da nosso memória de curta duração.

### O MPH de Card

Com o seu trabalho no Modelo de Processamento Humano, Card descreveu as memórias e os processadores através de um conjunto de parâmetros.

1. **Para as memórias:**

   - $\mu$: A capacidade de armazenamento (em itens);
   - $\delta$: O tempo de declínio de um item;
   - $k$: O tipo de codificação (física, acústica, visual, semântica, etc).

2. **Para os processadores:**

   - $t$: O tempo de ciclo.

### Os sistemas do MPH de Card

Os subsistemas **Perceptual**, **Motor** e **Cognitivo** incluem um processador e uma memória e podem ser descritos por três parâmetros:

- Capacidade de armazenamento: $U$;
- Tempo de decaimento: $D$;
- Tempo de ciclo e processamento: $T$.

Estes tempos podem ser avaliados experimentalmente:

- $t_p$ ~ 100ms [50-200 ms] - perceptual
- $t_m$ ~ 70ms [25-170 ms] - motor
- $t_c$ ~ 70ms [30-100 ms] - cognitivo

## Fatores Humanos

Os conhecimentos de Psicologia podem ser aplicados a quase todas as áreas, é desta forma que muitos psicólogos acabam por ganhar prémios Nobel de Economia pois são eles que criam as "leis" de Economia.

:::tip[Leis do ser Humano]
Da mesma forma que existem leis para descrever não só a Economia como também o mundo que nos rodeia, o mesmo se aplica ao ser humano e à forma como estas se comportam. Ninguem tem habilidades aleatórias mas sim rege-se por "leis". Algumas dessas leis são por exemplo:

- Velocidade de movimento das mãos;
- Velocidade de leitura;
- Capacidade de memorizar informação.
  Assim sendo, estas leis são mantidas em conta e quantificados quando usados para criar recomendações e aplicados, posteriomente no desenho de interfaces.
  :::

## Lei de Fitts

:::warning
Esta lei é muito importante para o segundo bake-off.
:::

[Sabendo que existe um alvo facilmente identificável, quanto tempo é que uma pessoa demora a passar para esse alvo?](color:blue)

Existem três grandes fatores que influenciam o tempo de movimento: o tempo, a distância e o tamanho do alvo. Para prever este tempo até ao contacto com o alvo teremos que usar a **Lei de Fitts**. Esta lei assume o movimento mais rápido e certeiro, baixas taxas de erro e utilização experiente.
Através da Lei de Fitts conseguimos explicar o compromisso entre velocidade e precisão: o tempo para atingir o alvo, a distância até ao centro do alco e o tamanho do alvo. Conseguimos até, com esta lei, perceber o quão fácil é interagir com uma aplicação ou qualquer interface. Para tal temos que usar a seguinte fórmula:

:::tip[Lei de Fitts]

$$
T_{\text{movimento}} = a + b \log_{2}\left( \frac{\text{Distância}}{\text{Tamanho}} + 1 \right)
$$

_Sejam $a$ e $b$ constantes empíricas_
:::

Esta fórmula é particularmente relavante quando queremos comparar alternativas para verificar qual é o melhor produto.

### Aumentar o tamanho de um alvo

Contudo se passarmos de um alvo de tamanho 5 para um alvo de tamanho 10 (ou seja duplicamos o tamanho do alvo) o nosso índice de dificuldade **diminui mas pouco** por estarmos a trabalhar com uma função logarítmica.

:::info[Exemplo]

$$
\begin{aligned}
\operatorname{ID} &= \log_{2} \left(\frac{\text{Distância}}{\text{Tamanho}} + 1\right)\\
\operatorname{ID} &= \log_{2} \left(\frac{15}{5} + 1\right) = 2\\
\operatorname{ID} &= \log_{2} \left(\frac{15}{10} + 1\right) = 1.3
\end{aligned}
$$

Ou seja, há um decremento em 35% da dificuldade.
:::

Assim, podemos concluir que aumentar o tamanho é mais benéfico para os alvos mais pequenos, até certo ponto. Se aumentarmos um alvo de tamanho 999 para tamanho 1000, a diferença de dificuldade entre ambos não é assim tão significativa.

### Manter a relação D/L constante

Temos sempre que manter a mesma proporção entre a distância e o tamanho de um alvo para manter a mesma dificuldade!

:::info[Exemplo]

$$
\begin{aligned}
\operatorname{ID} &= \log_{2} \left(\frac{\text{Distância}}{\text{Tamanho}} + 1\right)\\
\operatorname{ID} &= \log_{2} \left(\frac{15}{5} + 1\right) = 2\\
\operatorname{ID} &= \log_{2} \left(\frac{7.5}{2.5} + 1\right) = 2
\end{aligned}
$$

:::

### Aumento de produtividade

Apesar de não parecer ter uma importância assim tão significativa, existe um aumento de produtividade bastante significativo com a utilização de objetos mais claros. Por exemplo, é mais produtivo utilizar o sistema MacOS visto que os butões estão sempre na parte de cima do dispositivo do que no sistema Windows onde os butões apenas se encontram na parte superior da página onde nos encontramos.

:::details[Pergunta de Exame]
**Considere uma interface do tipo "point-and-click". Considere que tem de posicionar um alvo de dimensão 1 pixel. À luz da Lei de Fitts, diga quais são as cinco melhores posições para o alvo. Justifique.**

Neste caso cado um dos quatro cantos da página é mais fácil de interagir com do que qualquer outro ponto na página, tirando o ponto onde já nos encontramos.
:::

## Lei de Hick

Sermos deparados com muitas escolhas pode parecer apelativo mas influencia muito o nosso tempo de escolha, é por esta razão que os menus em restaurantes não tẽm muitas escolhas e estão dividos em entradas, prato principal e sobremesas assim como o prato principal está dividido em que tipo de comida a pessoa possa estar mais interessada em.

:::tip[Lei de Hick]
Desta necessidade de haver escolha mas em quantidades certas vem a **Lei de Hick**. Esta lei premite-nos prever o tempo para tomar uma decisão entre várias opções igualmente prováveis

$$
T_{\text{decisão}} = b \times \log_{2}(n+1)
$$

Seja $n$ o total de itens a escolher e $b$ o coeficiente dependente da tarefa (que pode ser determinado empiricamente tal como na Lei de Fitts)
:::

Mas de onde vem a relação logarítmica?

Escolher entre 10 ou 100 opções não demora 10 vezes mais tempo!

![Gráfico da Lei de Hick](./assets/0003-lei-hick.svg#dark=3)

Em termos de carga cognitiva, os recursos necessários para compreender e interagir com IU são muito menores, daí ser necessário diminuir o número de opções para uma programa ser bom. Uma boa interface é minimalista, como é o exemplo da Google.

Contudo também não podemos oferecer demasiado poucas opções ao utilizador, uma utilização demasiado simplificada também pode gerar problemas!

:::info[Exemplo]

Se tivermos 50 items e 1 menu:

$$
\begin{aligned}
T_{\text{decisão}} &= b \times \log_{2}(n+1)& b=1.0\\
&= \log_{2}(50+1)\\
&= 5.7 \op{s}
\end{aligned}
$$

Se tivermos 5 items e 10 sub menus:

$$
T_{\text{decisão}} = \log_{2}(5+1) + \log_{2} (10+1) = 6.0\op{s}
$$

Ou seja, temos um resultado **contra-intuitivo**!
:::

## Lei de Stu Card

O nosso cérebro, por mais complexo que seja precisa de organização para se orientar. É-nos mais fácil contar poucos elementos do que muitos elementos e é-nos mais fácil contar elementos quando agrupados do que muito dispersos. Dessa forma a lei de Stu Card traz a **Regra dos 4.5**, isto é, ao agruparmos elementos em grupo de 4 ou 5 elementos é-nos muito mais prático contar e visualizar tudo de uma só vez.

![Menus do MacOS a demonstrar opções agrupadas](./assets/0003-lei-stu-card.png#dark=3)

## Lei de Weber

A nossa capacidade de distinguir diferenças é muito proporcional à intensidade do estímulo. Assim sendo podemos calcular a diferença mínima perceptível (**_JND - just noticeable difference_** em inglês), através da seguinta fórmula:

$$
\frac{\Delta I}{I} = k
$$

Seja $I$ a intensidade original do estímulo, a variação ($\Delta$) de $I$ é a diferença mínima para que se torne perceptível e $k$ é uma constante.

:::info[Exemplo]

**Se um indivíduo deteta variação de peso de $1\op{kg}$ para $1.1\op{kg}$**, então também deteta variação de peso de $2\op{kg}$ para $2.2\op{kg}$.

E assim adiante quando compararamos qualquer par de pesos em que um deles é 10% mais pesado do que o outro.
:::

Mas aonde é que podemos aplicar a Lei de Weber em IPM? Esta lei está muito relacionado com as implicações de desenho, ou seja ao realçar elementos da interface (variação de tamanho, cor, etc) e o re-desenho de interfaces populares (incrementos menor que a constante de Weber). Temos que ter muito cuidado com as diferenças que fazemos nas nossas interfaces: por causa do elevado número de diferenças, o _Snapchat_ parou de ser uma aplicação tão popular como era.

## Lei de Miller

Como já tinha sido referido acima, o ser humano, em média consegue colocar em memória de curto prazo 7 $\pm$ 2 items. Assim sendo, ao agruparmos informação relacionada, estamos a permitir aumentar a capacidade de armazenamento.

### Implicações de Desenho - Lei de Miller

Ao organizarmos conteúdos em "grupos", permitimos facilitar o processamento da IU. Contudo isto **não** justifica o uso do número "mágico" 7 para opções necessárias! É sempre necessário ter em conta que a memória de curto prazo varia de acordo com o utilizador e situação (daí ser mais ou menos 2 items).

## Lei de Jakob

Ao criarmos uma interface é necessário ter em conta a sua consistência interna e externa não só perante o nosso trabalho mas também perante o dos outros.

> Os utilizadores passam a maior parte do seu tempo com outras interfaces e preferem que as vossas interfaces funcionem da mesma forma.

Para isso é necessário usar convenções, aproveitar modelos mentais, isto é, aproveitar como o utilizador perceciona o funcionamento do sistema. É perante esta lei que vêm muitas metáforas da vida real para os nossos dispositivos eletrónicos como o uso de pastas e ficheiros que provém da metáfora de mesa e tampo de mesa, organização.

Isto infere uma lei de consistência, hoje em dia ainda utilizamos teclados _QWERTY_ por uma questão de consistência apesar de já nao termos o problema de encravar as teclas. Apesar de ser necessário ir alterando o design de certos produtos o utilizador requer sempre que haja uma minimização de diferenças entre as versões.

> [Modelo mental:](color:blue) já tenho o modelo mental do dispositivo na cabeça, é preferível que funcione da mesma forma.

## Lei de Tesler

Apesar de ser necessário haver sempre uma conservação da complexidade dos sistemas tem que sempre haver um mínimo de complexidade necessário para o sistema funcionar. Por exemplo ao enviarmos um email, o mínimo de informação que podemos colocar é o remetente e o conteúdo, mas menos do que isso não nos é possível.

A criação de lojas como a _**Amazon Go**_ e _**Continentes Labs**_ traduzem mesmo esta simpicidade ao máximo possível quando vamos às compras.

Todos os processos têm uma complexidade inerente que não pode ser reduzida e tem de ser assumido pelo utilizador ou sistema, é necessário tentar transferir esta complexidade imposta ao utilizador para o sistema.

## Efeito Estética-Usabilidade

Quanto mais estético é um design, mas fácil é dos utilizadores acharem que estão a trabalhar com algo mais simples. Ao mantermos o nosso sistema esteticamente agradável, estamos a permitir ao utilizador que usufrua de uma experiência mais prática e menos complexa.

Contudo, tal como em tudo, tem algo demasiado estético pode causar problemas visto que quanto mais estético for uma interface mais fácil é de mascarar os seus problemas. As interfaces estéticas criam uma perceção de que o sistema funciona melhor e assim os utilizadores tornam-se mais tolerantes a problemas de usabilidade.

## Regra do "Pico Final"

É normal os utilizadores julgarem uma experiência com base no que sentiram no seu "pico" e no final, oa invés da totalidade da experiência ou média de todos os momentos. Assim é necessário encarar os erros no sistema comoo uma oportunidade de tornar a experiência mais positiva através de mensagens positivas e desenhos animados que atraiam os utlizadores.

Visto que os utilizadores recordam momentos negativos mais facilmente do que os momentos positivos por isso precisamos de identificar momentos em que o produto é mais útil ou apelativo e desenhar para deliciar o utilizador. Desta forma temos o som do _"Whoosh"_ ao enviar um email que funciona quase como um _high-five_ a dar os parabéns ao utilizador por ter termindado a sua tarefa.