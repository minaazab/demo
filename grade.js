const button = document.getElementById('button')
 
 
function calc() {
let math = document.getElementById('math').value
let science = document.getElementById('science').value
let history = document.getElementById('history').value
let english = document.getElementById('english').value
let pe = document.getElementById('pe').value
let add = document.getElementById('add').value
let add_2 = document.getElementById('add_2').value
 
let total = parseFloat(math) + parseFloat(science) + parseFloat(history) + parseFloat(english) + parseFloat(pe) + parseFloat(add) + parseFloat(add_2)
 
let percentage = (total/7)
 
let grades = ""
 
if(percentage >= 95  && percentage >= 100){
  grades = 'A+';
}else if(percentage >= 90  && percentage <= 94){
   grades = 'A';
}else if(percentage >= 80  && percentage <= 89){
   grades = 'B';
}else if(percentage >= 70  && percentage <= 79){
  grades = 'C';
}else if(percentage >= 65  && percentage <= 69){
  grades = 'D';
}else if(percentage >= 0  && percentage <= 64){
  grades = 'F';
}
 
var percentelement = document.getElementById('Result')
 
 
 
 
//percentage.innerHTML = "You have a " + percentage + "% average.";
//grades.innerHTML = "Your letter grade is " + grades + ".";
 
var percentplacementelement = document.getElementById('per')
percentplacementelement.innerHTML = "You have a " + percentage + "% average.";
 
 
var gradeelement = document.getElementById('gra')
gradeelement.innerHTML = "Your letter grade is " + grades + ".";
}
button.addEventListener("click", calc);
