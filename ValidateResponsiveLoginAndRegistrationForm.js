var createAccount=document.getElementById("Create-Account")
var LoginForm=document.getElementById("LoginForm")
var linkcreateaccount=document.getElementById("LinkAlreadyHaveAnAccount")
var linkloginform=document.getElementById("LinkDon'tHaveAnAccount")
linkloginform.addEventListener('click', () => {
    createAccount.style.display='grid'
    LoginForm.style.display='none'
});
linkcreateaccount.addEventListener('click', () => {
    LoginForm.style.display='grid'
    createAccount.style.display='none'
});
 var Createpasswpord=document.getElementById("txtPassword")
 var LoginPassword=document.getElementById("txtLoginPassword")
var LoginShowIcon=document.getElementById("LoginShowIcon")
var LoginHideIcon=document.getElementById("LoginHideIcon")
var CreateAccountShowicon=document.getElementById("CreateAccountShowIcon")
var CreateAccountHideicon=document.getElementById("CreateAccountHideIcon")
function PasswordHideAndShow(){
    if(Createpasswpord.type=="password")
    {
        Createpasswpord.type="text"
        CreateAccountShowicon.style.display="none"
        CreateAccountHideicon.style.display="flex"
    }
    else
    {
        Createpasswpord.type="password"
        CreateAccountShowicon.style.display="flex"   
        CreateAccountHideicon.style.display="none"
    }
}
function LoginPasswordHideAndShow(){
    if(LoginPassword.type=="password")
    {
        LoginPassword.type="text"
        LoginShowIcon.style.display="none"
        LoginHideIcon.style.display="flex"
    }
    else
    {
        LoginPassword.type="password"
        LoginShowIcon.style.display="flex"   
        LoginHideIcon.style.display="none"
    }
}
function EmptyOrNot(){
    var userName=document.forms["Create-Account"]["txtUserName"].value;
    var Email=document.forms["Create-Account"]["txtEmail"].value;
    var Password=document.forms["Create-Account"]["txtPassword"].value;
    var ConfirmPassword=document.forms["Create-Account"]["txtConfirmPassword"].value;
    if(userName==""||userName==null){
        document.getElementById("MsgUserName").innerHTML="Enter Your UserName"
    }
    else{
        document.getElementById("MsgUserName").innerHTML=""
    }
     if(Email==""||Email==null){
        document.getElementById("MsgEmail").innerHTML="Enter Your email"
     }
     else if(Email.length<15){
        document.getElementById("MsgEmail").innerHTML="Enter a valid email"
     }
     else if(Email.length>30){

     }
        else{
            document.getElementById("MsgEmail").innerHTML=""
        }

    
     if(Password==""||Password==null){
        document.getElementById("MsgPassword").innerHTML="Enter Your Password"
    }
    else{
        document.getElementById("MsgPassword").innerHTML=""
    }
     if(ConfirmPassword==""||ConfirmPassword==null){
        document.getElementById("MsgConfirmPassword").innerHTML="Enter Your ConfirmPassword"
    }
    else{
        document.getElementById("MsgConfirmPassword").innerHTML=""
    }
}
function LoginFormEmptyOrNot(){
    var Email=document.forms["LoginForm"]["txtLoginEmail"].value;
    var password=document.forms["LoginForm"]["txtLoginPassword"].value;
    if(Email==""||Email==null){
        document.getElementById("msg1").innerHTML="Enter Your Email"
    }
    else{
        document.getElementById("msg1").innerHTML=""
    }
     if(password==""||password==null){
        document.getElementById("msg2").innerHTML="Enter Your Password"
    }
    else{
        document.getElementById("msg2").innerHTML=""
    }
}
function EmailValidOrNot(){
    var Email=document.getElementById("txtEmail").value
    if(Email>15){
        document.getElementById("MsgEmail").innerHTML="enter a valid email"
    }
    else{
        document.getElementById("MsgEmail").innerHTML=""
    }
}