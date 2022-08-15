// elements
let budget = document.getElementById('budget').value;
let entertainment = document.getElementById('entertainment').value;
let savings = document.getElementById('savings').value;
let food = document.getElementById('food').value;
let entertainmentoutput = document.getElementById("entertainmentoutput");
let savingsoutput = document.getElementById("savingsoutput");
let foodoutput = document.getElementById("foodoutput");

// mathematics
let entertainmentbudget = budget*0.20;
let savingsbudget = budget*0.60;
let foodbudget = budget*0.20;


// printing

entertainmentoutput.innterHTML = "You should spend " + "$" + entertainmentbudget + " on your form of entertainment!";
savingsoutput.innerHTML = "You should save " + "$" + entertainmentbudget + "!";
foodoutput.innerHTML = "You should spend " + "$" + foodbudget + " on your food!";
