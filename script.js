const dildoEL = document.querySelector('#dildo')
const donaldEL = document.querySelector('#donald')
const startBtn = document.querySelector('.start')
const refreshBtn = document.querySelector('.refresh')
const gameOver = document.querySelector('.lose')
const counterEl = document.querySelector('.counter')

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32) {
        if(donaldEL.classList != 'jump') {
            donaldEL.classList.add('jump')
            setTimeout(function() {
                donaldEL.classList.remove('jump')
            }, 700 )
        }
    }
})

let counter = 0
let plusOne = 0

let isAlive = setInterval(function() {
    let donaldTop = parseInt(window.getComputedStyle(donaldEL).getPropertyValue('top'))
    let dildoLeft = parseInt(window.getComputedStyle(dildoEL).getPropertyValue('left'))

    if(dildoLeft < 35 && dildoLeft > 0 && donaldTop >= 60){
        gameOver.classList.remove('hidden')
        dildoEL.classList.remove('start-game')
    } else{
        if(dildoLeft < -10 && dildoLeft > -15){
            counter++
            counterEl.innerText = Math.ceil(counter/5)
        }
    }
    
})

startBtn.addEventListener('click', () => {
    dildoEL.classList.add('start-game')
    startBtn.classList.toggle('hidden')
})

refreshBtn.addEventListener('click', () => {
    location.reload()
})

