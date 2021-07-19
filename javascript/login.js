 // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var attempt = 3;
    
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( username == "chiusenidenzel@gmail.com" && password == "denzel"){
        alert ("Login successfully");
        window.location = "dashboard.html"; // Redirecting to other page.
        return true;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}