const   SENSACHOCRIVEL = require('readline-sync').question;

var ponto=0

console.log("1-Qual a funçao de um catalisador em uma reaçao quimica?")
var a="A|"+"Acelerar a reação quimica"
var b="B|"+"Diminuir a velocidade da reação quimica"
var c="C|"+"Quebrar a afinidade dos atomos"
var d="D|"+"Prolongar a reação quimica"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="a") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(a)
    console.log(ponto,"Ponto")
    console.log()
}
console.log("2-Quem foi Floriano Peixoto?")
var a="A|"+"Presidente do Brasil"
var b="B|"+"Comediante"
var c="C|"+"Marinheiro"
var d="D|"+"Digital Influencer"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="a") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(a)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("3-Qual o nome do personagem do Minecraft?")
var a="A|"+"Everton"
var b="B|"+"Ebert"
var c="C|"+"Stanley"
var d="D|"+"Steve"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="d") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(d)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("4-Qual o pais conhecido por seus ataques Kamikazes na Segunda Guerra Mundial?")
var a="A|"+"Coreia do Sul"
var b="B|"+"Japao"
var c="C|"+"Alemanha"
var d="D|"+"URSS"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="b") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(b)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("5-Quanto é 9+(5*2)/5?")
var a="A|"+"2"
var b="B|"+"12"
var c="C|"+"11"
var d="D|"+"10"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="c") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(c)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("6-Qual pais ganhou a copa de 2014?")
var a="A|"+"Alemanha"
var b="B|"+"Croacia"
var c="C|"+"França"
var d="D|"+"Argentina"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="a") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(a)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("7-Qual pais foi considerado o melhores navegadores do Século XV?")
var a="A|"+"Itália"
var b="B|"+"Espanha"
var c="C|"+"Portugal"
var d="D|"+"Holanda"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="c") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(c)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("8-Quem é o Autor do Livro Leviata?")
var a="A|"+"Thomas Hobbes"
var b="B|"+"Bob Marley"
var c="C|"+"John Locke"
var d="D|"+"Sócrates"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="a") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(a)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("9-Quem escreveu o Livro As veias Abertas Da America Latina?")
var a="A|"+"Francisco Pizarro"
var b="B|"+"Hernan Cortez"
var c="C|"+"Eduardo Galleano"
var d="D|"+"Vasco Da Gama"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="c") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(c)
    console.log(ponto,"Pontos")
    console.log()
}

console.log("10-Quem foi o ultimo imperador Inca")
var a="A|"+"Tupac Amaru"
var b="B|"+"Tupac Shakur"
var c="C|"+"Inca thukan"
var d="D|"+"Inca lukar"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
var resposta=(SENSACHOCRIVEL("Resposta:"))

if (resposta=="a") {
    ponto=ponto+1
    console.log()
    console.log("Resposta Correta")
    console.log(a)
    console.log(ponto,"Pontos")
    console.log()
}

if (ponto>=0&&ponto<=3) {
    console.log("Pouco intelecto")
    console.log(ponto+"Pontos")
}

if (ponto>=4&&ponto<=7) {
    console.log("Faltou conhecimento")
    console.log(ponto+"Pontos")
}
if (ponto>=7&&ponto<=9) {
    console.log("Está pelo caminho certo")
    console.log(ponto+"Pontos")
}
if (ponto==10) {
    console.log("Parabens seu esforço valeu a pena")
    console.log(ponto+"Pontos")
}


wtgqtc