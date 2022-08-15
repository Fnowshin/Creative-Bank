// step-1
document.getElementById('btn-submit').addEventListener('click', function(){

// step-2: get the email address inside the email input field
// always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step-3: get password
// 3. a: set id on the html element 
// 3. b: get the element
// 3. c: get the value from the element 
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

if (email === 'getMoney@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
else{
    alert('You Have to ENTER the specific Email & Password.')
}

})
