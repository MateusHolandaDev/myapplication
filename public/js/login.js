const input1 = document.querySelector('#t1')
const input2 = document.querySelector('#t2')
const label1 = document.querySelector('.txt1')
const label2 = document.querySelector('.txt2')

console.log(label1)
console.log(label2)
console.log(input1)
console.log(input2)

input1.addEventListener('focus', () => {
    label1.style.marginBottom = '20px'
    label1.style.transition = 'all 0.3s'
})

input2.addEventListener('focus', () => {
    label2.style.marginBottom = '20px'
    label2.style.transition = 'all 0.3s'
})

input1.addEventListener('blur', () => {
    if(input1.value != ''){
        label1.style.marginBottom = '20px'
    }else{
        label1.style.marginBottom = '0px'
    }
    
})

input2.addEventListener('blur', () => {
    if(input2.value != ''){
        label2.style.marginBottom = '20px'
    }else{
        label2.style.marginBottom = '0px'
    }
})

let btn = document.querySelector('#Versenha')

let senha = document.querySelector('#senha')

let id = 1
btn.addEventListener('click', () => {
  
  if(id == 1){
    senha.innerText = 'SenhaAqui'
    btn.innerText = 'Esconder Senha'
    id = 2
  }else{
    senha.innerText = ''
    btn.innerText = 'Ver senha'
    id = 1
  }
  
})