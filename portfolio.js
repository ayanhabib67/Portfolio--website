

import{collection,serverTimestamp,db,addDoc,query,orderBy,onSnapshot}from"./firebase.js"

let submitMessage = async()=>{

    
    let name  = document.getElementById("name")
    let email  = document.getElementById("email")
    let message  = document.getElementById("message")
    let subject = document.getElementById("subject");

    
    
    if(name.value && email.value && message.value &&subject.value){

        
        let Usermessage ={
            name : name.value,
            email : email.value,
             message : message.value,
             subject: subject.value, 
           timestamp : serverTimestamp()
    
}
    
    
    



sendEmail()

let dbRef =collection(db,"messageData")


await  addDoc(dbRef , Usermessage)










name.value=""
email.value=""
message.value=""
subject.value=""
Swal.fire({
    icon: 'success',
    title: 'Good job!',
    text: 'Form submitted successfully.'
  });



}else{
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill this field!'
      });
}

    
    
}
let submit = document.getElementById("submit")
submit.addEventListener("click",submitMessage)










let getSkills =async ()=>{
    let showSkills = document.getElementById("showSkills")
    let collectionRef =collection(db,"Skills")
    let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
    
    await onSnapshot(dbRef,(snapShot)=>{
        // showSkills.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().Skills;
let data2 = doc.data().SkillsName;



showSkills.innerHTML+=` <div class="flex flex-col items-center">
          <i class="${data1}"></i>
          <span class="text-gray-300">${data2}</span>
        </div> `






})})}

getSkills()














let getPortfolio =async ()=>{
    let projects = document.getElementById("projects")
    let collectionRef =collection(db,"Portfolio-index-Page")
    let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
    
    await onSnapshot(dbRef,(snapShot)=>{
projects.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().titlePortfolio;
let data2 = doc.data().projectNamePortfolio;
let data3 = doc.data().discripctionPortfolio;
let data4 = doc.data().url;
let data5 = doc.data().imageUrl;
let data6 = doc.data().codeUrl66;




projects.innerHTML +=
`
<div class="shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 
  transition-all duration-300 ease-in-out hover:-translate-y-2 
  hover:shadow-xl lg:hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-600
  group cursor-pointer w-full max-w-4xl mx-auto" data-aos="fade-up">

  <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
    <div class="w-full lg:w-1/2 xl:w-2/5 max-w-md lg:max-w-none">
      <svg viewBox="0 0 500 400" class="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-[1.03]">
        <rect x="50" y="20" width="400" height="250" rx="20" ry="20" fill="#1f2937"
          class="transition-colors duration-300 group-hover:fill-gray-800"/>
        <rect x="65" y="35" width="370" height="220" rx="10" ry="10" fill="#000"/>
        <clipPath id="screenClip">
          <rect x="70" y="40" width="360" height="210" rx="5" ry="5"/>
        </clipPath>
        <image 
          href="${data5}" 
          x="70" y="40" 
          width="360" height="210" 
          clip-path="url(#screenClip)" 
          preserveAspectRatio="xMidYMid slice"
          class="transition-all duration-500 group-hover:brightness-110"
          alt="Project screenshot"
        />
        <circle cx="250" cy="30" r="3" fill="#555"/>
        <rect x="0" y="270" width="500" height="50" rx="5" ry="5" fill="#374151"/>
        <rect x="150" y="260" width="200" height="10" rx="3" ry="3" fill="#4b5563"/>
        <rect x="220" y="280" width="60" height="20" rx="4" ry="4" fill="#6b7280"/>
      </svg>
    </div>

    <div class="w-full lg:w-1/2 xl:w-3/5 space-y-4 lg:space-y-5 text-gray-800 dark:text-gray-100 font-[Poppins]">
      <div class="transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
        <h3 class="text-xl lg:text-2xl font-extrabold text-indigo-700 dark:text-indigo-400">Title</h3>
        <p class="ml-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">${data1}</p>
      </div>

      <div class="transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
        <h3 class="text-xl lg:text-2xl font-extrabold text-indigo-700 dark:text-indigo-400">Programming Language</h3>
        <p class="ml-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">${data2}</p>
      </div>

      <div class="transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
        <h3 class="text-xl lg:text-2xl font-extrabold text-indigo-700 dark:text-indigo-400">Description</h3>
        <p class="ml-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">${data3}</p>
      </div>

      <div class="flex flex-wrap gap-3 lg:gap-4 pt-3">
        <a href="${data4}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow 
          transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-95
          focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-offset-0">
          <span>Visit Project</span>
          <span class="ml-2" aria-hidden="true">🚀</span>
        </a>

        <a href="${data6}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center px-5 py-2.5 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow 
          transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95
          focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-offset-0">
          <span>View Code</span>
          <span class="ml-2" aria-hidden="true">💻</span>
        </a>
      </div>
    </div>
  </div>
</div>






`
;
        
        
    })
    
})

}

getPortfolio()






let getaboutMe =async ()=>{
  let about = document.getElementById("about")
  let abMe = document.getElementById("abMe")
  let collectionRef =collection(db,"About-Me")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
    about.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().aboutMeText;

abMe.innerHTML=`About Me  `
about.innerHTML+=` <div class="max-w-4xl mx-auto">
  
        </div>
        <div class="md:w-2/3 md:pl-12" >
          
          <p class="text-gray-300 mb-4">
          ${data1}
          </p>
         
        </div>
      </div>
    </div>`




})
    
})

}

getaboutMe()



let getMyIamge =async ()=>{
  let profileImage = document.getElementById("profileImage")
  let collectionRef =collection(db,"My-Photo-Url")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
    profileImage.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().profilePhotoUrl;


profileImage.innerHTML=` <img 
                
                src="${data1}" 
                alt="Your Name" 
                class="w-full h-full object-cover"
            >`

})})}


getMyIamge()







let getMyName = async () => {
  let MyName = document.getElementById("MyName");
  let Myname2 = document.getElementById("Myname2");
  let Myname3 = document.getElementById("Myname3");
  let nameLoader = document.getElementById("nameLoader");

  // Loader show karo jab fetch start ho
  nameLoader.style.display = "block";

  let collectionRef = collection(db, "My-Name");
  let dbRef = query(collectionRef, orderBy("timestamp", "asc"));

  onSnapshot(dbRef, (snapShot) => {
    // Data show se pehle sab empty karo
    MyName.innerHTML = ``;
    Myname2.innerHTML = ``;
    Myname3.innerHTML = ``;

    snapShot.forEach((doc) => {
      let data1 = doc.data().addMyName;

      MyName.innerHTML = `&lt;${data1}/&gt;`;
      Myname2.innerHTML = `${data1}`;
      Myname3.innerHTML = `&lt;${data1}/&gt;`;
    });

    // Pehli snapshot ke baad loader hide karo
    nameLoader.style.display = "none";
  });
};

getMyName();









// let input = "Ayan Habib"
// let btn = document.getElementById("btn-Speek")


// const textToSpeech = ()=> {

// let text = input
// const voice = new SpeechSynthesisUtterance(text)
// window.speechSynthesis.speak(voice)


// }

// btn.addEventListener("click",textToSpeech)





// let inputt = "Ayan Habib"
// let btnn = document.getElementById("btn-Speek3")


// const textToSpeechh = ()=> {

// let text = inputt
// const voice = new SpeechSynthesisUtterance(text)
// window.speechSynthesis.speak(voice)


// }

// btnn.addEventListener("click",textToSpeechh)



// let inputtpp = "Ayan Habib"
// let btnnpp = document.getElementById("btn-Speek-fallback")


// const textToSpeechhp = ()=> {

// let text = inputtpp
// const voice = new SpeechSynthesisUtterance(text)
// window.speechSynthesis.speak(voice)


// }

// btnnpp.addEventListener("click",textToSpeechhp)












let myvoice =async ()=>{
  let voice = document.getElementById("voice")
  let collectionRef =collection(db,"Voice-Messages")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
    voice.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().speechInput;


voice.innerHTML=` <button id="btn-Speek" class="text-2xl text-indigo-600">
          <i class="fas fa-volume-up"></i>
        </button>
         
          `

let input = `${data1}`
let btn = document.getElementById("btn-Speek")


const textToSpeech = ()=> {

let text = input
const voice = new SpeechSynthesisUtterance(text)
window.speechSynthesis.speak(voice)


}



btn.addEventListener("click",textToSpeech)
})})}

myvoice()




let myvoice2 =async ()=>{
  let voice2 = document.getElementById("voice2")
  let collectionRef =collection(db,"Voice-Messages")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
    voice2.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().speechInput;


voice2.innerHTML=` <button id="btn-Speekk" class="text-2xl text-indigo-600">
          <i class="fas fa-volume-up"></i>
        </button>
         
          `

let inputt = `${data1}`
let btn = document.getElementById("btn-Speekk")


const textToSpeechh = ()=> {

let text = inputt
const voice = new SpeechSynthesisUtterance(text)
window.speechSynthesis.speak(voice)


}



btn.addEventListener("click",textToSpeechh)
})})}

myvoice2()





let myvoice3 =async ()=>{
  let voice3 = document.getElementById("voice3")
  let collectionRef =collection(db,"Voice-Messages")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
    voice3.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().speechInput;


voice3.innerHTML=` <button id="btn-Speekk3" class="text-2xl text-indigo-600">
          <i class="fas fa-volume-up"></i>
        </button>
         
          `

let inputt3 = `${data1}`
let btn = document.getElementById("btn-Speekk3")


const textToSpeechh3 = ()=> {

let text = inputt3
const voice = new SpeechSynthesisUtterance(text)
window.speechSynthesis.speak(voice)


}



btn.addEventListener("click",textToSpeechh3)
})})}

myvoice3()




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







let sendEmail = () => {


  let templateParams = {
    name: name.value,
    email: email.value,
    message: message.value,
    subject: subject.value
  };

  emailjs.send("service_78eru5y", "template_9rl7mpl", templateParams)
    .then(() => alert("Email sent"))
    .catch(() => alert("Email not sent"));
}

