// Character sets
const lowercase = Array.from('abcdefghijklmnopqrstuvwxyz');
const uppercase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const digits = Array.from('0123456789');
const symbols = Array.from('!@#$%^&*()_+[]{}|;:,.<>?/~`-=');

// Combine all sets into one array
const characters = [...lowercase, ...uppercase, ...digits, ...symbols];

let password1El = document.getElementById("pass1-el")
let password2El = document.getElementById("pass2-el")

function getInputValue(){
    let inputEl = document.getElementById("input-length")
    let length = inputEl.value
    return length
}

function copyText(button){
    let toCopy = button.textContent
    navigator.clipboard.writeText(toCopy);
}

function generatePassword(){
    let output = ""
    let length = getInputValue()
    if (length === "" || length < 8){
        length = 10    // default
    } else if (length > 18){
        length = 18    // max
    }
    for (let i=0; i<length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        output += characters[randomIndex]
    }
    return output
}

function renderPasswords(){
    let pass1 = generatePassword()
    let pass2 = generatePassword()
    password1El.textContent = pass1
    password2El.textContent = pass2
    password1El.hidden = false
    password2El.hidden = false
}
    



