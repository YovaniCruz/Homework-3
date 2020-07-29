
//The getElementById() method returns the element that has the ID attribute with the specified value.
//In this case, the "button" variable is returning to "passGen" and the "h1" is returned to "password" in the HTML file.
var button = document.getElementById("passGen")
var h1 = document.getElementById("password")

//The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//In this case, the evenListener is allowing the button to be clicked and actually run the code.
//After that, we assign textContent in h1 to be the "generatePassword" value.
button.addEventListener("click", function () {
    h1.textContent = generatePassword()
});

//Creating the function for the password generator starting by declaring what type of characters can be used in the password.
function generatePassword() {
    var useNumbers = confirm("Use Numbers In Password?")
    console.log(useNumbers)

    var useUpperCase = confirm("Use Upper Case In Password?")
    console.log(useUpperCase)

    var useLowerCase = confirm("Use Lower Case In Password?")
    console.log(useLowerCase)

    var useSpecialChar = confirm("Use Special Charactars In Password?")
    console.log(useSpecialChar)

    //
    var passwordLengh = 0
    //Creating a while loop which can execute a block of code as long as a specified condition is true.
    //In this case, the conditions are that numbers entered must be between 8-128. If the password doesn't meet the parameters, the loop will stop and prompt the user to enter a number b/t 8-128 characters.
    //The password length can now be all numbers as long as there are between 8-128 characters.
    while(passwordLengh <8 || passwordLengh > 128){
        passwordLengh = prompt("Enter a number between 8 - 128")
        passwordLengh = Number(passwordLengh)
    }
    
    //Writing a message to the console to let it know what types of characters can be used in the password.
    console.log(passwordLengh, typeof passwordLengh)

    var upperCaseLetters =
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var lowerCaseLetters =
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

    //Generating the random number function.  
    function nextRand(low, high) {
        var randomNumber = Math.floor(Math.random() * high) + low;
        return randomNumber
    }
    console.log(nextRand(0, 10))
    console.log(nextRand(0, 10))
    console.log(nextRand(0, 10))
    console.log(nextRand(0, 10))
    console.log(nextRand(0, 10))
    console.log(nextRand(0, 10))
    console.log(nextRand(0, 10))

    //Combining the final array which is empty with all other arrays (valid characters). Continuously adding all of the smaller arrays into a larger array that will be used to get all charracters together.
    var finalArr = []
    if (useNumbers) {
        finalArr = finalArr.concat(numbers)
    }
    console.log(finalArr)
    if (useUpperCase) {
        finalArr = finalArr.concat(upperCaseLetters)
    }
    console.log(finalArr)
    if (useLowerCase) {
        finalArr = finalArr.concat(lowerCaseLetters)
    }
    console.log(finalArr)
    if (useSpecialChar) {
        finalArr = finalArr.concat(specialChar)
    }
    console.log(finalArr)

    //Creating final password.
    var finalPassword = ""
    for (var i = 0; i < passwordLengh; i++) {
        var randomNum = nextRand(0, finalArr.length) //Adding random numbers. nextRand generates a number containing characters from "0" up to "finalArr.length".
        var randomChar = finalArr[randomNum] //Set a random character. Now a number is created that is b/t 0 and the legth of the array. This creates a random number from this array.
        console.log(randomChar) //Sending a message to the console so it is visible.
        finalPassword += (randomChar) //Add the chosen character to the final password. The "for" loop will continue to run, adding another random character from the array to the password.
    }
    console.log(finalPassword) //Console log the final password so that it is visible in the console.
    return (finalPassword) //Return the final password so that is visible in the browser.
}