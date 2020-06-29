//Password variable values:
var generateButton = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8 and 128 characters. How many characters would you like your password to have?"));
    
var uppers = confirm("Do you want uppercase letters to be used?");
var lowers = confirm("Do you want lowercase letters to be used?");
var numbers = confirm("Do you want numbers to be used?");
var symbols = confirm("Do you want special characters to be used?");

while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must use at least one of these character types!");
    uppers = confirm("Do you want uppercase letters to be included?");
    lowers = confirm("Do you want lowercase letters to be included?");
    numbers = confirm("Do you want numbers to be included?");
    specials = confirm("Do you want special characters to be included?");
}

window.addEventListener('click', function() {
    generateNewPassword();
});

function generateNewPassword() {
    var password = "";

    var allowed = {};
    if (uppers) password += rando(allowed.uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (lowers) password += rando(allowed.lowers = "abcdefghijklmnopqrstuvwxyz");
    if (numbers) password += rando(allowed.numbers = "1234567890");
    if (symbols) password += rando(allowed.symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

    document.getElementById("password").value = randoSequence(password).join("");
    
}

