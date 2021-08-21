let button = document.querySelector(".button");
let cashAmount = document.querySelector("#cashAmount");
let billAmount = document.querySelector("#billAmount");
let container = document.querySelector(".container");
let body = document.querySelector("body");
let notes = document.querySelectorAll(".note");
let returnAmount = document.querySelector(".returnAmount");
let cashLabel=document.querySelector(".cashLabel");
let currencies = [2000, 500, 100, 20, 10, 5, 1];

cashAmount.style.display="none";
cashLabel.style.display="none";
button.addEventListener("click", function (e) {
    
    
    let cashAmountValue = cashAmount.value;
    let billAmountValue = billAmount.value;
    if(cashAmount.style.display=="none"){
        cashAmount.style.display="inline";
        cashLabel.style.display="inline";
        button.textContent=`check`;
        cashAmountValue="";
        
    }
    else{
        cashAmount.style.display="none"
        cashLabel.style.display="none";
        button.textContent=`click it to see cash Amount`;
        
    }
    if (billAmountValue !== "" && cashAmountValue!=="") {
        cashAmountValue = parseInt(cashAmount.value);
        billAmountValue = parseInt(billAmount.value);


        let validAmount = validateBillAndCashAmount(cashAmountValue, billAmountValue);
        let [validBillAmount, validCashAmount] = validAmount;
        // console.log(validBillAmount,validCashAmount);

        calculate(validBillAmount, validCashAmount);

    }



})
function validateBillAndCashAmount(cashAmountValue, billAmountValue) {
    if (cashAmountValue <= 0) {
        alert("Please enter valid cash Amount");
        return;
    }
    else if (billAmountValue <= 0) {
        alert("Please enter valid bill Amount");
        return;
    }
    else if (billAmountValue > cashAmountValue) {
        alert("Please enter valid cash Amount");
        return;
    }
    else {
        let amount = [];
        amount.push(billAmountValue, cashAmountValue);
        return amount;
    }

}
function calculate(validBillAmount, validCashAmount) {


    let AmountTobeReturned = validCashAmount - validBillAmount;
    returnAmount.textContent = "Amount to be returned:" + AmountTobeReturned;

    for (let i = 0; i < currencies.length; i++) {
        let noOfNotes = parseInt(AmountTobeReturned / currencies[i]);
        AmountTobeReturned = AmountTobeReturned % currencies[i];
        notes[i].textContent = noOfNotes;



    }
}