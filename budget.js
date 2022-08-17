// elements
let budget = document.getElementById('budget');
let entertainmentoutput = document.getElementById('entertainmentoutput');
let savingsoutput = document.getElementById('savingsoutput');
let foodoutput = document.getElementById('foodoutput');





// calling the math to print
function budgeter(event) {
    if (budget.value.length == ""){
        alert("Please enter a budget!");
    }
    else{
    // mathematics
    let entertainmentbudget = parseFloat(budget.value) * 0.20;
    let savingsbudget = parseFloat(budget.value) * 0.60;
    let foodbudget = parseFloat(budget.value) * 0.20;
    entertainmentoutput.innerHTML = "You should spend $" + entertainmentbudget + " on your form of entertainment!";
    savingsoutput.innerHTML = "You should save " + "$" + savingsbudget + "!";
    foodoutput.innerHTML = "You should spend " + "$" + foodbudget + " on your food!";
    // event.preventDefault();
    }
}

// printing
// if (budget.length == ""){
//     alert("Please enter a budget!");
// }
