// Calculate Button

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let billAmount = document.getElementById("bill_amount").value;
    let tipPercent = document.getElementById("tip_P").value;
    let eachPeople = document.getElementById("people").value;
    let tipAmount = document.getElementById("tip_amount").value = (billAmount/100) * tipPercent;
    document.getElementById('total-Bill').value = (parseFloat(billAmount)+parseInt(tipAmount)) / parseInt(eachPeople);
    
})
// Reset Buttion

let reset = document.getElementById("reset");
let inputElement = document.querySelectorAll("input");

reset.addEventListener("click", function () {
    inputElement.forEach(input => input.value = " ");
 
    
})





    
