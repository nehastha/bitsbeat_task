let uName = document.getElementById('userRegname');
let uAddress = document.getElementById('userRegaddress');     
let uPhone = document.getElementById('userRegphone');
let uEmail = document.getElementById('userRegemail');
let uPassword = document.getElementById('userRegpassword');
let uRepassword = document.getElementById('userRegrepassword');
let uSubmit = document.getElementById('formSubmit');
let isName = false;
let isAddress = false;
let isNumber = false;
let isEmail = false;
let issame = false;
// let ispass = false;
let nameerror = document.getElementById('nameError');
let addresserror = document.getElementById('addressError');
let phoneerror=document.getElementById('phoneError');
let emailerror=document.getElementById('emailError');
let passworderror=document.getElementById('passwordError');
let repassworderror=document.getElementById('repasswordError');
// let hashedPassword;


uName.addEventListener('input',function(e){
    // e.preventDefault()
    // alert();

    if((uName.value == "")){
        nameerror.innerHTML = "invalid";
        isName = false;
    }

    else {
        nameerror.innerHTML = "valid";
        isName = true;
    }
    // else{
    //     isName = true;
    //     nameerror.innerHTML = "valid";
    // }
    
})

uAddress.addEventListener('input', function(e){
    // alert('hi');
    if (uAddress.value == ""){
        addresserror.innerHTML = "invalid";
        isAddress=false;
    }

    else{
        addresserror.innerHTML = "valid";
         isAddress=true;
    }
})

uPhone.addEventListener('input', function(e){
    // alert('hi');
    if (uPhone.value == ""){
        phoneerror.innerHTML = "invalid";
        isNumber=false;
    }

    else{
        phoneerror.innerHTML = "valid";
        isNumber=true;
    }
})

uEmail.addEventListener('input', function(e){
    // alert('hi');
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (regex.test(uEmail.value)) {
        emailerror.innerHTML = "valid";
        isEmail=true;
    }

    else{
        emailerror.innerHTML = "invalid";
        isEmail=false;
    }
})

uPassword.addEventListener('input', function(e){
    // alert('hi');
    if (uPassword.value == ""){
        passworderror.innerHTML = "Enter Password";
        isPass=false;
    }

    else{
        isPass=true;
        // hashedPassword = encrypt(uPassword.value);
    }
})

uRepassword.addEventListener('input', function(e){
    // alert('hi');
    if(uRepassword.value == ""){
        repassworderror.innerHTML = "the field is empty";
        issame = false;
    }


    else if (uPassword.value ==   uRepassword.value  ){
        repassworderror.innerHTML = "Password match";
        issame = true;
    }

    
    else{
        repassworderror.innerHTML = "Password does not match"; 
        issame = false;
    }
})

function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}



uSubmit.addEventListener('click',function(e){
    e.preventDefault()
    
    if ((isName == true) && (isAddress ==true) && (isEmail == true) && (isNumber==true) && (isEmail==true) && ( issame == true)){
        let list = {
            Name: document.getElementById('userRegname').value,
            Address: document.getElementById('userRegaddress').value,
            Phone: document.getElementById('userRegphone').value,
            Email: document.getElementById('userRegemail').value,
            Password: encrypt(document.getElementById('userRegpassword').value, "neha") 
        }
        
        let length = localStorage.length;
        let id = 'data'+length;
        localStorage.setItem(id, JSON.stringify(list)); 
        
              
        window.location = 'display.html';
    
    }

    
})