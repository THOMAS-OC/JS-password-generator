const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specials = ["$", "-", "*", "%", "&", "!", "?", ".", ";"]
const numbers = ["1","2","3","4","5","6","7","8","9"]

let passwordGenerate = []


const resultPassword = document.querySelector('.result-password')
const inputRange = document.querySelector('input[name="len"]')
const labelLen = document.querySelector('.label-len span')

const inputMaj = document.querySelector('input[name="maj"]')
const inputNumber = document.querySelector('input[name="number"]')
const inputSpecial = document.querySelector('input[name="special"]')

const button = document.querySelector("button")
const buttonCopy = document.querySelector("i")

// Property password
let passwordProperty = {
    len : 8,
    ifMaj : false,
    ifNumber : false,
    ifSpecial : false
}

inputRange.addEventListener("change", () => {
    labelLen.innerText = inputRange.value
    passwordProperty.len = inputRange.value
})

inputMaj.addEventListener("change", () => {
    passwordProperty.ifMaj = inputMaj.checked;
})

inputNumber.addEventListener("change", () => {
    passwordProperty.ifNumber = inputNumber.checked;
})

inputSpecial.addEventListener("change", () => {
    passwordProperty.ifSpecial = inputSpecial.checked;
})
// END property password

function arrayShuffle(a) {
    var l = a.length, t, r;
    while (0 !== l) {
      r = Math.floor(Math.random() * l);
      l -= 1;
      t = a[l];
      a[l] = a[r];
      a[r] = t;
    }
    return a;
}

button.addEventListener("click", () => {

    resultPassword.innerText = ""

    passwordGenerate = []

    while (passwordGenerate.length < passwordProperty.len) {

        if (passwordProperty.ifMaj) {
            passwordGenerate.push(letters[Math.floor(Math.random() * 26)].toUpperCase())
        }

        if(passwordProperty.ifNumber) {
            passwordGenerate.push(numbers[Math.floor(Math.random() * 10)])
        }

        if(passwordProperty.ifSpecial) {
            passwordGenerate.push(specials[Math.floor(Math.random() * 10)])
        }

        passwordGenerate.push(letters[Math.floor(Math.random() * 26)])

    }

    passwordGenerate = arrayShuffle(passwordGenerate)

    passwordGenerate = resultPassword.innerText = passwordGenerate.join('')
    
})

buttonCopy.addEventListener("click", () => {
    buttonCopy.style.color = "red"
    navigator.clipboard.writeText(passwordGenerate);
    window.setTimeout(()=>{
        buttonCopy.style.color = "white"
    }, 1000)
})