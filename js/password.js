var upper = ""
var combo = ""

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var special = "!#$%&'*+,-./:;<=>?@[\]^_`~" 
var nums = "1234567890"

function password() {
   
   var sp = confirm("Do you want Special characters?")
   var lo = confirm("Do you want Lowercase characters?")
   var uo = confirm("Do you want Uppercase characters?")
   var num = confirm("Do you want Numerical characters?")
    
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

   if (num === true) {
    var choice4 = nums.concat(upper)
   } else {
       choice4 = ""
   }
   
   
   var allChoices = combo.concat(choice2, choice3, choice1, choice4)
   
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

    //alert("This is your Password " + random(userInput))
    document.getElementById("p1").innerHTML = random(userInput) 
    document.getElementById("myInput").value = random(userInput - 8)
    
    }

}


function copyClip() {
  
    
  
  
    var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
