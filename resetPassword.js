



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










window.addEventListener('online', () => {
  Swal.fire({
    icon: 'success',
    title: '✅ Online',
    text: 'You are back online!',
    timer: 2000,
    showConfirmButton: false
  });
});





window.addEventListener('offline', () => {
  Swal.fire({
    icon: 'warning',
    title: '⚠️ Offline',
    text: 'You are offline now! Please connect to the internet.',
    timer: 2000,
    showConfirmButton: false
  });
});