// elements
let budget = document.getElementById('budget').value;
let entertainmentoutput = document.getElementById('entertainmentoutput');
let savingsoutput = document.getElementById('savingsoutput');
let foodoutput = document.getElementById('foodoutput');
let button = document.getElementById('budgetme');
button.addEventListener("click", budgeter());

// mathematics
function budgeter(event) {
    event.preventDefault();
    let entertainmentbudget = budget * 0.20;
    let savingsbudget = budget * 0.60;
    let foodbudget = budget * 0.20;
    entertainmentoutput.innterHTML = 'You should spend $ ${entertainmentbudget}, on your form of entertainment!';
    savingsoutput.innerHTML = "You should save " + "$" + entertainmentbudget + "!";
    foodoutput.innerHTML = "You should spend " + "$" + foodbudget + " on your food!";
}

// printing
if (budget.length == ""){
    alert("Please enter a budget!");
}
