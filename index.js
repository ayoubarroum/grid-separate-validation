function validateEmail(email){
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function  emailValidation(){
    var email = $("#email").val();
    var result = $(".error_email_text");
    result.text("");
    if(validateEmail(email)){
        console.log("Success");
        $("#email").css("border-color","hsl(154, 59%, 51%)");
        $(".error_email_icon").css("display","none");
    }else{
        result.text("Looks like this is not an email");
        $("#email").css("border-color","red");
        $(".error_email_icon").css("display","unset");
    }
    return false;
}

function  firstNameValidation(){
    var firstName = $("#firstname").val().trim();
    var result = $(".error_firstname_text");
    result.text("");
    if(firstName==null||firstName==""){
        result.text("First name cannot be empty");
        $("#firstname").css("border-color","red");
        $(".error_firstname_icon").css("display","unset");
    }else{
        console.log("Success");
        $("#firstname").css("border-color","hsl(154, 59%, 51%)");
        $(".error_firstname_icon").css("display","none");
    }
}
function  lastNameValidation(){
    var lastName = $("#lastname").val().trim();
    var result = $(".error_lastname_text");
    result.text("");
    if(lastName==null||lastName==""){
        result.text("Last name cannot be empty");
        $("#lastname").css("border-color","red");
        $(".error_lastname_icon").css("display","unset");
    }else{
        console.log("Success");
        $("#lastname").css("border-color","hsl(154, 59%, 51%)");
        $(".error_lastname_icon").css("display","none");
    }
}

function passwordValidation(){
    var password = $("#password").val().trim();
    var result = $(".error_password_text");
    result.text("");
    if(password==""||password==null){
        result.text("Password cannot be empty");
        $("#password").css("border-color","red");
        $(".error_password_icon").css("display","unset");
    }else{
        console.log("Success");
        $("#password").css("border-color","hsl(154, 59%, 51%)");
        $(".error_password_icon").css("display","none");
    }
};





$(".claim").on("click", emailValidation);
$(".claim").on("click", firstNameValidation);
$(".claim").on("click", lastNameValidation);
$(".claim").on("click", passwordValidation);