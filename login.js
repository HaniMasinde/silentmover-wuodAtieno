let usernameInput=document.getElementById('username');
let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('password');
let usernameError=document.getElementById('username_error');
let emailError=document.getElementById('email_error');
let passwordError=document.getElementById('passwod_error');
let regForm=document.getElementById('form');
let isValid=true;

regForm.addEventListener('submit',function(yes){

    yes.preventDefault();

    function validateUsername(){
        let username=usernameInput.value.trim();
        
        if(username==null||username==''){
            usernameError.textContent='Username required.'
            isValid=false;
        }
        else if(!username.includes('Hani')){
            usernameError.textContent='Username must include "Hani"';
            isValid=false;
        }
        else if(username.length<5){
            usernameError.textContent='Username must have atleast 6 characters';
        }
        else if(username.length>8){
            usernameError.textContent='Username must have utmost 8 characters';
            isValid=false;
        }
        else{
            isValid;
        }

    }

    function validateEmail(){
        let email=emailInput.value.trim();

        if(email==''||email===null){
            emailError.textContent='Email required';
            isValid=false;
        }

        else if(!email.includes('@')&&!email.includes("'.com")){
            emailError.textContent='Invalid Email';
            isValid=false;
        }
        else{
            isValid;
        }

    }

    function validatePassword(){

        let password=passwordInput.value.trim();

        if(password==''||password===null){
            passwordError.textContent='Password Required';
            isValid=false;
        }
        else if(password==='password'){
            passwordError.textContent='Password cannot be password';
            isValid=false;
        }
        else if(!password.includes('0')||!password.includes('2')||!password.includes('4')||!password.includes('6')||!password.includes('8')){
            passwordError.textContent='password must include an even number';
            isValid=false;
        }
        else if(password.length<4){
            passwordError.textContent='password must be atleast 4 characters';
            isValid=false;
        }
        else if(password.length>6){
            passwordError.textContent='password must be atmost 6 characters';
            isValid=false;
        }
        else{
            isValid;
        }

    }
    if(isValid){
        window.location.href='home.html';
    }

})
