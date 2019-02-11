var attempt = 3;
function validate(){
var email = document.getElementById("emailname").value;
var passwrd = document.getElementById("passwrd").value;
if(email == "charlie@gmail.com" && passwrd == "password1234"){	
window.location.href = './index.html';
return true;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
if(attempt == 0){
document.getElementById("emailname").disabled = true;
document.getElementById("passwrd").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}