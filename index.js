let generatorBtn = document.getElementById("generator");
let pswInput1 = document.getElementById("pass1");
let pswInput2 = document.getElementById("pass2");

generatorBtn.addEventListener("click", () => {
    let password1 = '';
    let password2 = '';
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let counter1 = 0;
    let counter2 = 0;
    let length = 15;
    while (counter1 < length) {
      password1 += characters[Math.floor(Math.random() * characters.length)];
      counter1 ++;
    }
    while (counter2 < length) {
        password2 += characters[Math.floor(Math.random() * characters.length)];
        counter2 ++;
      }
    let pass1 = pswInput1.value = password1;
    let pass2 = pswInput2.value = password2;
    return pass1, pass2
})

// Copy function

function copyText1() {
    let pswInput1 = document.getElementById("pass1");
    if(pswInput1.value) {
        navigator.clipboard.writeText(pswInput1.value);
        alert("Text copied")
    }
}

function copyText2() {
    let pswInput2 = document.getElementById("pass2");
    if(pswInput2.value) {
        navigator.clipboard.writeText(pswInput2.value);
        alert("Text copied")
    }
}