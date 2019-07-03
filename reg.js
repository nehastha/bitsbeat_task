// const uSubmit = document.getElementById('regSubmit');

function validation(){
    const uName = document.getElementById('userRegname').value;
    const uAddress = document.getElementById('userRegaddress').value;     
    const uPhone = document.getElementById('userRegphone').value;
    const uEmail = document.getElementById('userRegemail').value;
    const uPassword = document.getElementById('userRegpassword').value;
    const uRepassword = document.getElementById('userRegrepassword').value;


    // nameValidate(uName);
    // addressValidate(uAddress);
    // phoneValidate(uPhone);
    // emailValidate(uEmail);
    // passwordValidate(uPassword, uRepassword);

    // localStorage.setItem ('Name',uName);
    // localStorage.setItem ('Address',uAddress);
    // localStorage.setItem ('Phone',uPhone);
    // localStorage.setItem ('Email',uEmail);
    // localStorage.setItem ('Password',uPassword);
    // repasswordValidate(uRepassword);

    if (uName == ""){
        document.getElementById('nameError').innerHTML = "** Please enter the name field";
        return false;

    }

    else if ((uName.length <=2)||(uName.length >=50)){
        document.getElementById('nameError').innerHTML = "** Entered name does not seem like a name";
        return false;
    }

    else if(!isNaN(uName)){
        document.getElementById('nameError').innerHTML = "** Enter your correct name without no";
        return false;
    }

    if (uAddress == ""){
        document.getElementById('addressError').innerHTML = "** Please enter the Address field";
        return false;

    }
    
    if (uPhone == ""){
        document.getElementById('phoneError').innerHTML = "** Please enter the phone number field";
        return false;

    }

    if (isNaN(uPhone)){
        document.getElementById('phoneError').innerHTML = "** The given number should be numerical";
        return false;
    }

    if (uPhone.length!=10){
        document.getElementById('phoneError').innerHTML = "** The number should be 10 digits";
        return false;
    }

    if (uEmail == ""){
        document.getElementById('emailError').innerHTML = "** Please enter the email field";
        return false;

    }

    if (uEmail.indexOf('@') <= 0){
        console.log ('hi')
        document.getElementById('emailError').innerHTML = "** Invalid Email due to @";
        return false;

    }

    else if ((uEmail.charAt(uEmail.length-4)!= ".") && (uEmail.charAt(uEmail.length-3)!= ".")){
        document.getElementById('emailError').innerHTML = "** Invalid Email due to no position of .";
        return false;

    }

    if (uPassword == ""){
        document.getElementById('passwordError').innerHTML = "** Please enter the password field";
        return false;

    }

    if (uPassword.length < 6){
        document.getElementById('passwordError').innerHTML = "** Your password is not strong. It should have more than 8 characters";
        return false;

    }

    if (uRepassword == ""){
        document.getElementById('repasswordError').innerHTML = "** Please enter the password again field";
        return false;

    }

    if (uPassword != uRepassword){
        document.getElementById('repasswordError').innerHTML = "**The password does not match";
        return false;

    }

    
    
    if (uName == ""){
        document.getElementById('nameError').innerHTML = "** Please enter the name field";
        return false;

    }

    if (uAddress == ""){
        document.getElementById('addressError').innerHTML = "** Please enter the Address field";
        return false;

    }

    if (uPhone == ""){
        document.getElementById('phoneError').innerHTML = "** Please enter the phone number field";
        return false;

    }

    if (uEmail == ""){
        document.getElementById('emailError').innerHTML = "** Please enter the email field";
        return false;

    }

    if (uPassword == ""){
        document.getElementById('passwordError').innerHTML = "** Please enter the password field";
        return false;

    }

    if (uRepassword == ""){
        document.getElementById('repasswordError').innerHTML = "** Please enter the password again field";
        return false;

    }

    localStorage.setItem ('Name',uName);
    localStorage.setItem ('Address',uAddress);
    localStorage.setItem ('Phone',uPhone);
    localStorage.setItem ('Email',uEmail);
    localStorage.setItem ('Password',encrypt(uPassword,"1234567890"));
    repasswordValidate(uRepassword);

}

function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}
// console.log(encrypt(uPassword,"1234567890"));
// console.log(decrypt('U2FsdGVkX1/0oPpnJ5S5XTELUonupdtYCdO91v+/SMs='))

// const nameValidate = function naam(name1){
//     if (name1 == ""){
//         document.getElementById('nameError').innerHTML = "** Please enter the name field";
//         return false;

//     }

//     else if ((name1.length <=2)||(name1.length >=50)){
//         document.getElementById('nameError').innerHTML = "** Entered name does not seem like a name";
//         return false;
//     }

//     else if(!isNaN(name1)){
//         document.getElementById('nameError').innerHTML = "** Enter your correct name without no";
//         return false;
//     }
    
    
// }

// const addressValidate = function thau(address1){
//     if (address1 == ""){
//         document.getElementById('addressError').innerHTML = "** Please enter the Address field";
//         return false;

//     }
// }

// const phoneValidate = function callno(phone1){
//     if (phone1 == ""){
//         document.getElementById('phoneError').innerHTML = "** Please enter the phone number field";
//         return false;

//     }

//     if (isNaN(phone1)){
//         document.getElementById('phoneError').innerHTML = "** The given number should be numerical";
//         return false;
//     }

//     if (phone1.length!=10){
//         document.getElementById('phoneError').innerHTML = "** The number should be 10 digits";
//         return false;
//     }
// }
// const emailValidate = function mail(email1){
//     if (email1 == ""){
//         document.getElementById('emailError').innerHTML = "** Please enter the email field";
//         return false;

//     }

//     if (email1.indexOf('@') <= 0){
//         console.log ('hi')
//         document.getElementById('emailError').innerHTML = "** Invalid Email due to @";
//         return false;

//     }

//     // else if (email1.indexOf('@'<=0)){
//     //     document.getElementById('emailError').innerHTML = "** Invalid Email due to @";
//     //     return false;

//     // }

//     else if ((email1.charAt(email1.length-4)!= ".") && (email1.charAt(email1.length-3)!= ".")){
//         document.getElementById('emailError').innerHTML = "** Invalid Email due to no position of .";
//         return false;

//     }

// }
// const passwordValidate = function pass(password1, repassword1){
//     if (password1 == ""){
//         document.getElementById('passwordError').innerHTML = "** Please enter the password field";
//         return false;

//     }

//     if (password1.length < 6){
//         document.getElementById('passwordError').innerHTML = "** Your password is not strong. It should have more than 8 characters";
//         return false;

//     }

//     if (repassword1 == ""){
//         document.getElementById('repasswordError').innerHTML = "** Please enter the password again field";
//         return false;

//     }

//     if (password1 != repassword1){
//         document.getElementById('repasswordError').innerHTML = "**The password does not match";
//         return false;

//     }

// }

// var idnames= ["name","number","email","pass","confirm-pass"];
//                 var fieldname;
//                 const checkval = 0;
//                 for (i=0; i<6 ; i++){
//                     fieldname = idnames[i];

//                     if( document.getElementById("myform").elements[i].value != ""){
//                         checkval += 1;

//                     }

//                 }


//                     if (checkval === 6){
//                         document.getElementById('formsubmit').disabled = false;

//                     }

//                     else{
//                         document.getElementById('submit').disabled = true;

//                     }
            
