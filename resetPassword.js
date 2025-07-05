



import{sendPasswordResetEmail,auth}from"./firebase.js"



let resetPasswordBtn =()=>{


    let email = document.getElementById("email")
    sendPasswordResetEmail(auth, email.value)
  .then(() => {
   console.log("yes");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}










let resetPassword  = document.getElementById("resetPassword")
resetPassword.addEventListener("click",resetPasswordBtn)