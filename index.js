const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function rndChar() {
    let rnd = Math.floor(Math.random() * characters.length)
    return rnd
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 16; i++) {
        password += characters[rndChar()]
    }
    return password
}

function getPasswords() {
    document.getElementById("pw-one-el").textContent = generatePassword()
    document.getElementById("pw-two-el").textContent = generatePassword()
}

