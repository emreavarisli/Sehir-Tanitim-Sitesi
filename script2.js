const current = document.querySelector('.current')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
var time = 0

document.addEventListener('DOMContentLoaded', timer);

function timer (){
setInterval(function(){
  time++
},300)
}

one.addEventListener('click',function(){
    alert(time+' Saniye zaman geçirdiniz...')
})
two.addEventListener('click',function(){
    alert(time+' Saniye zaman geçirdiniz...')
})
three.addEventListener('click',function(){
    alert(time+' Saniye zaman geçirdiniz...')
})
four.addEventListener('click',function(){
    alert(time+' Saniye zaman geçirdiniz...')
})
five.addEventListener('click',function(){
    alert(time+' Saniye zaman geçirdiniz...')
})
six.addEventListener('click',function(){
    alert(time+' Saniye zaman geçirdiniz...')
})

const text = document.querySelector('#text')
const email = document.querySelector('#email')
const konu = document.querySelector('#konu')
const message = document.querySelector('#message')
const submit = document.querySelector('#submit')

submit.addEventListener('click',function(){
    alert(`AD SOYAD: ${text.value}
    EMAİL: ${email.value}
    KONU: ${konu.value}
    MESSAGE: ${message.value}`)
})

