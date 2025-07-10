



import{  auth,signInWithEmailAndPassword  } from"./firebase.js"


let Login = ()=>{
    
    
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    signInWithEmailAndPassword (auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if(user){
location="admin.html"
      }
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
}
let registerBtn = document.getElementById("register-btn")
registerBtn.addEventListener("click",Login)
