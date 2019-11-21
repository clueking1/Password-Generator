var upper = ""
var combo = ""

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var special = "!#$%&'*+,-./:;<=>?@[\]^_`~" 

function password() {
   
   var sp = confirm("Do you want Special characters?")
   var lo = confirm("Do you want Lowercase characters?")
   var uo = confirm("Do you want Uppercase characters?")
    
    if (sp === true) {
        var choice1 = special.concat(upper)
    } else {
        choice1 = ""
    }
        
    if (lo === true) {
    var choice2 = lowerCase.concat(upper)
   }  else {
        choice2 = ""
    }
        
    if (uo === true) {
    var choice3 = upperCase.concat(upper)
   } else {
       choice3 = ""
   }
   
   var allChoices = combo.concat(choice2, choice3, choice1)
   
   console.log(allChoices)
   
   if (allChoices === "") {
       alert("You must choose atleast ONE Character!!!")
        return sp
  } 

    var userInput = prompt("How long do you want your UNIQUE Password to be!?!?! Please choose between a character number between 8-128")
    if (userInput < 8 || userInput > 128) {
    alert("You picked a number outside of the allowed characters number! You must pick between 8 - 128! Please try again!")

    }  else  {

    console.log(userInput)
    var result = ""

    var upperLength = allChoices.length
    function random(length) {
    for ( var i = 0; i < length; i++)  {
    result +=  allChoices.charAt(Math.floor(Math.random()* upperLength));
    }
    return result;
    }

    alert("This is your Password " + random(userInput))
    }

}