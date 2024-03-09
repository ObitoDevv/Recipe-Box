// User Authentication Functions
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
      alert("Login successful");
      // Redirect to index.html
      window.location.href = "home.html";
  } else {
      alert("Invalid email or password");
  }
}
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
      alert("User with this email already exists");
      return;
  }

  const newUser = { email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Sign up successful. You can now login.");
}

function hidden_login_and_sign_up() {
  document.querySelector('.cont_forms').className = "cont_forms";  
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  document.querySelector('.cont_form_login').style.opacity = "0"; 

  setTimeout(function() {
      document.querySelector('.cont_form_sign_up').style.display = "none";
      document.querySelector('.cont_form_login').style.display = "none";
  }, time_to_hidden_all);
}


const time_to_show_login = 400;
const time_to_hidden_login = 200;

function change_to_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               

    setTimeout(function() {  
        document.querySelector('.cont_form_login').style.opacity = "1"; 
    }, time_to_show_login);  

    setTimeout(function() {    
        document.querySelector('.cont_form_sign_up').style.display = "none";
    }, time_to_hidden_login);  
}

const time_to_show_sign_up = 100;
const time_to_hidden_sign_up = 400;

function change_to_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";
  
    setTimeout(function() {  
        document.querySelector('.cont_form_sign_up').style.opacity = "1";
    }, time_to_show_sign_up);  

    setTimeout(function() {   
        document.querySelector('.cont_form_login').style.display = "none";
    }, time_to_hidden_sign_up);  
}    

const time_to_hidden_all = 500;

function hidden_login_and_sign_up() {
    document.querySelector('.cont_forms').className = "cont_forms";  
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
    document.querySelector('.cont_form_login').style.opacity = "0"; 

    setTimeout(function() {
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
    }, time_to_hidden_all);
}

