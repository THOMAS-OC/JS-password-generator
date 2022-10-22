const resultPassword = document.querySelector('.result-password')

const inputRange = document.querySelector('input[name="len"]')
const labelLen = document.querySelector('.label-len span')

const inputMin = document.querySelector('input[name="min"]')
const inputMaj = document.querySelector('input[name="maj"]')
const inputNumber = document.querySelector('input[name="number"]')
const inputSpecial = document.querySelector('input[name="special"]')


inputRange.addEventListener("change", () => {
    labelLen.innerText = inputRange.value
})