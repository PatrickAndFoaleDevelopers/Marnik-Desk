function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Foale1") {
   var yourElement = document.getElementById('link');
   yourElement.setAttribute('href', 'marley.html');
    return true;
   }
if(passwordText == "password") {
   var yourElement = document.getElementById('link');
   yourElement.setAttribute('href', 'nikolai.html');
    return true;
   }
   if(passwordText == "Admin") {
   var yourElement = document.getElementById('link');
   yourElement.setAttribute('href', 'admin.html');
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }