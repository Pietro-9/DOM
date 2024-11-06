//Atividade 1
let quadrado1 = document.getElementById('quadrado1')
let quadrado2 = document.getElementById('quadrado2')
let quadrado3 = document.getElementById('quadrado3')
quadrado1.addEventListener('click', () => mudardecor(quadrado1,'pink'))
quadrado2.addEventListener('click', () => mudardecor(quadrado2,'yellow'))
quadrado3.addEventListener('click', () => mudardecor(quadrado3,'red'))

function mudardecor(quadrado,cor){
    if(quadrado.style.backgroundColor == 'blue'){
        quadrado.style.backgroundColor = cor
    }
      
    else{
        quadrado.style.backgroundColor = 'blue'
    }


}
//Atividade 2
let clique = document.getElementById('clique')
let resetar = document.getElementById('resete')
let texto2 = document.getElementById('texto2')
let contador = 0
clique.addEventListener('click', function clicar(){
    contador = 1+contador
    texto2.innerText = contador

})
resetar.addEventListener('click', function resetar(){
    contador = 0
    texto2.innerText = contador 
})
//Atividade 3
let texto3 = document.getElementById('texto3')
let botao = document.getElementById('botao')
let textovisivel = false
botao.addEventListener('click', function clicar(){
    if(textovisivel == true){
    texto3.innerText = ''
    textovisivel = false
    }else{
    texto3.innerText = 'mostrar' 
    textovisivel = true  
    }
})
//Atividade 4
let botao4 = document.getElementById('botao4')
let texto4 = document.getElementById('texto4')
botao4.addEventListener('click', function clicar(){
    let textomudado = prompt('Digite um novo texto')
    texto4.innerText = textomudado
})
//Atividade 5
let pressione = document.getElementById('pressione')
document.addEventListener('keydown', function pressionar(evento){
    pressione.innerText = 'Você pressionou a tecla ' + evento.key
})
//Atividade 6
let botao6 = document.getElementById('botao6')
let foto = document.getElementById('foto')
let candidatonome = document.getElementById('nome')
let confirmar = document.getElementById('confirmar')
let botaoconfirmar = document.getElementById('botaoconfirmar')
let nome 
let arquivofoto
let numero
botao6.addEventListener('click', function pressione(){
     numero = prompt('Qual número você quer votar?')
    
    switch(numero){
        case '55200':
            nome = 'Brasil Oliveira'
            arquivofoto = './imagens/vereador-Brasil.jpeg'
            break
        case '22500':
            nome = 'Daniel Daut'
            arquivofoto = './imagens/vereador-Daniel.jpeg'
            break
        case '40123':
            nome = 'Lemos'
            arquivofoto = './imagens/vereador-Lemos.jpeg'
            break
        case '55001':
            nome = 'Marcelo Pitol'
            arquivofoto = './imagens/vereador-Marcelo.jpeg'
            break
        default :
            nome = 'Nulo'
            arquivofoto = './imagens/voto-Nulo.jpeg'
            break
    }
    foto.src = arquivofoto
    candidatonome.innerText = nome
    confirmar.style.display = 'block'
    botaoconfirmar.style.display = 'block'
    


})
let votosBrasil = 0
let votosDaniel = 0
let votosLemos = 0
let votosMarcelo = 0
let votosNulo = 0

botaoconfirmar.addEventListener('click', function confirmar(){
    switch(numero){
        case '55200':
            votosBrasil  = 1+ votosBrasil
            break
        case '22500':
            votosDaniel  = 1+ votosDaniel
            break
        case '40123':
            votosLemos  = 1+ votosLemos
            break
        case '55001':
            votosMarcelo  = 1+ votosMarcelo
            break
        default:
            votosNulo = 1+ votosNulo
            break
    }
    console.log('Brasil Oliveira: '+votosBrasil)
    console.log('Daniel Daut: '+votosDaniel)
    console.log('Lemos: '+votosLemos)
    console.log('Marcelo Pitol: '+votosMarcelo)
    console.log('Voto Nulo: '+votosNulo)
})