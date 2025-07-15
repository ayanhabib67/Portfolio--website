



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