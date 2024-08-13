function validate() {
    
    let username =  document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");
    msg.style.color = "red";
    if(username==""){
        msg.textContent="Please enter the username.";
        return false;
    }
    else if(password==""){
        msg.textContent="Please enter the password.";
        return false;
    }
    else if(password.length<6){
        msg.textContent="Password should be >6.";
        return false;
    }
    else{
        return true;
    }
}