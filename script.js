var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

//Password variable values:
var upperChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharChoice = ["'", ".", ",", ":", ";", "=", "?", "/", "_", "~", "|", "&quot", "&apos", "&amp", "&lt", "&gt", "!", "$", "#", "%", "(", ")", "*", "[", "]", "+", "-"];

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
//Start function to generate password
function generatePassword() {
    //Ask user for input
    var howManyChar = prompt("How many characters do you want the password to have? (Choose between 8 and 128 characters.");
    if (howManyChar); {
        alert("This needs a value");
    } else if (howManyChar < 8 || howManyChar > 128) {
        howManyChar = parseInt(prompt("You must choose between 8 and 128!"));
    } else {
        upper = confirm("Do you want to include uppercase letters in your password?");

        lower = confirm("Do you want to include lowercase letters in your password?");

        number = confirm("Do you want to include numbers in your password?");

        specialChar = confirm("Do you want to include special characters in your password?");
    };

    if ()


    }      
    

    function newPass() {

        if (upper === false && lower === false && number === false && specialChar === false) {
            alert("If you chose 'No' for everything, then you won't receive a new password");
        }

        if (howManyChar > 128) {
            alert("You can't have more than 128 characters.");
        }

        if (howManyChar < 8) {
            alert("You can't have less than 8 characters.");
        }

        while (password.length<howManyChar) {
            else if (upper === true && lower === false && number === false && specialChar === false) {
            for (var i = 0; i < parseInt(howManyChar); i++) {
                randomNumber(upperChoice) //a single element from array
                + randomNumber(lowerChoice)
            }
            //independent only if uppercase is randomized
            if(upperChoice) {

            }

            if(lowerChoice) {

            }

            for(i = 0; i < howManyChar; i++ ) {
               var passwordText = passwordText += randomizeChoice()
               return passwordText;
            }
           
        }

        else if (upper === true && lower === true && number === true && specialChar === true) {
            while (passwordText.length<howManyChar) {
                upperChoice = (upper.length * Math.random());
                lowerChoice = (lower.length * Math.random());
                numberChoice = (number.length * Math.random());
                specialCharChoice = (specialChar * Math.random());
                hold = password.charAt(upperChoice);
                hold = (password.length%2==0)?(hold):(hold);
                character += hold;
                if (upperChoice === true) (character += upper.charAt ())
            }

    }
    password=password.split('').sort(function(){return Math.random()}).join('');

    return password.substr(0,len);
}
