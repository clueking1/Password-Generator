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
}