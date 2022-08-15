// 1. add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
// 2. get the amount from the withdraw input field
// 2.5 always make sure to convert the input into a number by using parsefloat when we want to get a number

const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

if(isNaN(newWithdrawAmount)){
    alert('Please Provide a Number');
    return;
}

// 3. Get previouse withdraw total
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// // 4. calculate total witdraw amount
// const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

// // 4.5. set total withdraw amount
// withdrawTotalElement.innerText = currentWithdrawTotal;

// 5. get the previous balance total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// 7. clear the withdraw box
withdrawField.value = ' ';

if(newWithdrawAmount > previousBalanceTotal){
    alert('Not enough money');
    return;
}
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

// 6. get the new balance after withdrawing
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;

})