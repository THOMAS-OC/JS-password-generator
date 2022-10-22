const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const resultPassword = document.querySelector('.result-password')

const inputRange = document.querySelector('input[name="len"]')
const labelLen = document.querySelector('.label-len span')

const inputMin = document.querySelector('input[name="min"]')
const inputMaj = document.querySelector('input[name="maj"]')
const inputNumber = document.querySelector('input[name="number"]')
const inputSpecial = document.querySelector('input[name="special"]')

const button = document.querySelector("button")

// Property password
let passwordProperty = {
    len : 0,
    ifMaj : false,
    ifMin : false,
    ifNumber : false,
    ifSpecial : false
}

inputRange.addEventListener("change", () => {
    labelLen.innerText = inputRange.value
    passwordProperty.len = inputRange.value
})


inputMaj.addEventListener("change", () => {
    passwordProperty.ifMaj = ifMaj.checked;
})

inputMin.addEventListener("change", () => {
    passwordProperty.ifMin = ifMin.checked;
})

inputMin.addEventListener("change", () => {
    passwordProperty.ifNumber = ifNumber.checed;
})

inputMin.addEventListener("change", () => {
    passwordProperty.ifSpecial = ifSpecial.cheked;
})
// END property password



button.addEventListener("click", () => {

})