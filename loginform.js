function validateEmail() 
{
    // var re = /\S+@\S+/;
    // return re.test(email);
    var name=document.getElementById("email").value;
    if (name.indexOf('@')<=0){
        document.getElementById("message").innerHTML="Invalid email";
        return false;
    }

    if (name.charAt(name.length-4)!="."){
        document.getElementById("message").innerHTML="Invalid email";
        return false;
    }

   

    var a=document.getElementById("pass").value;
    var b=document.getElementById("confirm-pass").value;
    


    if(a==""){
        document.getElementById("message1").innerHTML="please fill password";
        return false;
    }

    if(a.length<5 ||a.length>=25){
        document.getElementById("message1").innerHTML="character error";
        return false;
    }

    if (a!=b){
        document.getElementById("message1").innerHTML="password does not match";
        return false;
    }

    

}

