const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')

const svgBgForest = document.querySelector('.forest svg path:nth-child(1)')
const svgIconForest = document.querySelector('.forest svg path:nth-child(2)')
const svgBgRain = document.querySelector('.rain svg path:nth-child(1)')
const svgIconRain = document.querySelector('.rain svg path:nth-child(2)')
const svgBgCoffeeShop = document.querySelector('.coffeeshop svg path:nth-child(1)')
const svgIconCoffeeShop = document.querySelector('.coffeeshop svg path:nth-child(2)')
const svgBgFirePlace = document.querySelector('.fireplace svg path:nth-child(1)')
const svgIconFirePlace = document.querySelector('.fireplace svg path:nth-child(2)')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let timerTimeout

let forestAudio = new Audio("./audio/forest.wav")
let coffeeshopAudio = new Audio("./audio/coffeeshop.wav")
let fireplaceAudio = new Audio("./audio/fireplace.wav")
let rainAudio = new Audio("./audio/rain.wav")

function primaryColor() {
    svgBgForest.style.fill = "var(--bt-bg-color)"
    svgIconForest.style.fill = "var(--bt-txt-color"
    svgBgRain.style.fill = "var(--bt-bg-color)"
    svgIconRain.style.fill = "var(--bt-txt-color"
    svgBgCoffeeShop.style.fill = "var(--bt-bg-color)"
    svgIconCoffeeShop.style.fill = "var(--bt-txt-color"
    svgBgFirePlace.style.fill = "var(--bt-bg-color)"
    svgIconFirePlace.style.fill = "var(--bt-txt-color"
}

function pauseMusic() {
    rainAudio.pause()
    fireplaceAudio.pause()
    coffeeshopAudio.pause()
    forestAudio.pause()
}

function countdown() {
timerTimeout = setTimeout(function() {
    let seconds = Number (secondsDisplay.textContent) 
    let minutes = Number (minutesDisplay.textContent)
    
    if (minutes <= 0) {
        return
    }
    
    if (seconds <= 0) {
        seconds = 60
        minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
    }
    
    secondsDisplay.textContent = String(seconds -1).padStart(2, "0")
    
    countdown()
    
}, 1000)
}

function reset(){
    clearTimeout(timerTimeout);
    secondsDisplay.textContent = "00"
    minutesDisplay.textContent = "00"
}

function plus() {
    let minutes = Number (minutesDisplay.textContent)
    minutes = minutes + 5
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function minus() {
    let minutes = Number (minutesDisplay.textContent)
    minutes = minutes - 5
    if (minutes <= 0) {
        return
    }
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

buttonPlay.addEventListener('click', function() {
    clearTimeout(timerTimeout);
    countdown()
})

buttonStop.addEventListener('click', function() {
    reset()
    pauseMusic()
    primaryColor()
})

buttonPlus.addEventListener('click', function(){
    plus()
})

buttonMinus.addEventListener('click', function(){
    minus()
})

buttonForest.addEventListener(`click`, function(){
    pauseMusic()
    forestAudio.play()
    forestAudio.loop = true

    primaryColor()
    svgBgForest.style.fill = "var(--bt-bg-color-hover)"
    svgIconForest.style.fill = "var(--bt-txt-color-hover)"
})

buttonFirePlace.addEventListener(`click`, function(){
    pauseMusic()
    fireplaceAudio.play()
    fireplaceAudio.loop = true

    primaryColor()
    svgBgFirePlace.style.fill = "var(--bt-bg-color-hover)"
    svgIconFirePlace.style.fill = "var(--bt-txt-color-hover)"
})

buttonCoffeeShop.addEventListener(`click`, function(){
    pauseMusic()
    coffeeshopAudio.play()
    coffeeshopAudio.loop = true

    primaryColor()
    svgBgCoffeeShop.style.fill = "var(--bt-bg-color-hover)"
    svgIconCoffeeShop.style.fill = "var(--bt-txt-color-hover)"
})

buttonRain.addEventListener(`click`, function(){
    pauseMusic()
    rainAudio.play()
    rainAudio.loop = true

    primaryColor()
    svgBgRain.style.fill = "var(--bt-bg-color-hover)"
    svgIconRain.style.fill = "var(--bt-txt-color-hover)"
})