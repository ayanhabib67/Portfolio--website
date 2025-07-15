
import{serverTimestamp,collection, addDoc,db,onSnapshot,query, orderBy,deleteDoc ,doc,onAuthStateChanged ,auth,signOut }from"./firebase.js"


onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;
      
    



let portfolioAdd =async ()=>{

    
    let title =document.getElementById("title")
    let discripction =document.getElementById("discripction")
    let projectName  =document.getElementById("projectName")
    let url  =document.getElementById("url")
    let imageUrl = document.getElementById("imageUrl")
    let codeUrl =document.getElementById("codeUrl")
    
    
if(title.value&&discripction.value&&projectName.value&&url.value&&imageUrl.value&&codeUrl.value){

    
    let portfolioData ={
        titlePortfolio : title.value,
        discripctionPortfolio : discripction.value,
        projectNamePortfolio : projectName.value,
        url:url.value,
        imageUrl:imageUrl.value,
        codeUrl:codeUrl.value,
        timestamp : serverTimestamp()
        
    }
    
    
    
    let dbRef =collection(db,"Portfolio")

 
    await  addDoc(dbRef , portfolioData)

    title.value=""
    discripction.value=""
    projectName.value=""
    url.value=""
    imageUrl.value=""
    codeUrl.value=""
    
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

let addPortfolio = document.getElementById("addPortfolio")
addPortfolio.addEventListener("click",portfolioAdd)





let getPortfolio =async ()=>{
    let projects = document.getElementById("projects")
    let collectionRef =collection(db,"Portfolio")
    let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
    
    await onSnapshot(dbRef,(snapShot)=>{
projects.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().titlePortfolio;
let data2 = doc.data().projectNamePortfolio;
let data3 = doc.data().discripctionPortfolio;
let data4 = doc.data().url;
let data5 = doc.data().imageUrl;
let data6 = doc.data().codeUrl;


// codeUrl


projects.innerHTML +=` <div class="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 mb-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl border border-gray-200 dark:border-gray-700">
<!-- Project Image -->
<div class="w-full max-w-md mx-auto mb-4">
<svg viewBox="0 0 500 400" class="w-full h-auto">
  <!-- Laptop Screen Frame -->
  <rect x="50" y="20" width="400" height="250" rx="20" ry="20" fill="#1f2937"/>
  <!-- Bezel -->
  <rect x="65" y="35" width="370" height="220" rx="10" ry="10" fill="#000"/>
  <!-- Screen Image -->
  <clipPath id="screenClip">
    <rect x="70" y="40" width="360" height="210" rx="5" ry="5"/>
  </clipPath>
  <image href="${data5}" x="70" y="40" width="360" height="210" clip-path="url(#screenClip)" preserveAspectRatio="xMidYMid slice"/>
  <!-- Camera dot -->
  <circle cx="250" cy="30" r="3" fill="#555"/>
  <!-- Keyboard Base -->
  <rect x="0" y="270" width="500" height="50" rx="5" ry="5" fill="#374151"/>
  <!-- Hinge -->
  <rect x="150" y="260" width="200" height="10" rx="3" ry="3" fill="#4b5563"/>
  <!-- Touchpad -->
  <rect x="220" y="280" width="60" height="20" rx="4" ry="4" fill="#6b7280"/>
</svg>
</div>


<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-gray-900 dark:text-white">Project</h3>
<button 
  onClick="deleteProjects('${doc.id}')" 
  class="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-lg transition"
  title="Delete Project"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
  Delete
</button>
</div>

<div class="space-y-4 text-lg text-gray-800 dark:text-gray-100 font-[Poppins]">
<p>
  <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">Title</span>
  <span class="block ml-2 text-gray-600 dark:text-gray-300">${data1}</span>
</p>
<p>
  <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">programming language</span>
  <span class="block ml-2 text-gray-600 dark:text-gray-300">${data2}</span>
</p>
<p>
  <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">Description</span>
  <span class="block ml-2 text-gray-600 dark:text-gray-300">${data3}</span>
</p>
<div class="flex gap-4">
  <a href="${data4}" target="_blank" rel="noopener noreferrer"
    class="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
    Visit Project 🚀
  </a>
  <a href="${data6}" target="_blank" rel="noopener noreferrer"
    class="inline-block px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition">
    View Code 💻
  </a>
</div>
</div>
`
;
        
        
    })
    
})

}

getPortfolio()





let deleteProjects = async(id)=>{
    await deleteDoc(doc(db, "Portfolio", id));
    console.log("test",id);
    
}


window.deleteProjects=deleteProjects








let logout = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


let logoutBtn = document.getElementById("logout-Btn")
logoutBtn.addEventListener("click",logout) 





let logout2 = ()=>{
  signOut(auth).then(() => {
      // Sign-out successful.
  }).catch((error) => {
      // An error happened.
  });
}


let logoutBtn2 = document.getElementById("logout-Btn2")
logoutBtn2.addEventListener("click",logout2) 




// let logout3 = ()=>{
//   signOut(auth).then(() => {
//       // Sign-out successful.
//   }).catch((error) => {
//       // An error happened.
//   });
// }


// let logoutBtn3 = document.getElementById("logout-Btn3")
// logoutBtn3.addEventListener("click",logout3) 






} else {
    window.location="./adminLogin.html"
}
});










let addMySkills = async ()=>{
    
    
    
    let  Skills = document.getElementById("Skills")
    let SkillsName = document.getElementById("SkillsName")
    
if(Skills.value&&SkillsName.value){
    


    let skillsData ={
        Skills :Skills.value,
        SkillsName:SkillsName.value,
        timestamp : serverTimestamp()
        
        
    }
    
    
    
    let dbRef =collection(db,"Skills")
    
    
    await  addDoc(dbRef , skillsData)
    window.location.reload();

}else{
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill this field!'
      });
}
    
}

let SkillsBtn = document.getElementById("Skills-Btn")
SkillsBtn.addEventListener("click",addMySkills)








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
           <button 
    onClick="deleteSkills('${doc.id}')" 
    class="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-lg transition"
    title="Delete Skills"
  >
   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    Delete
  </button>
        </div> `






})})}


let deleteSkills = async(id)=>{
    await deleteDoc(doc(db, "Skills", id));
    console.log("test",id);
 
    window.location.reload();

}


window.deleteSkills=deleteSkills
getSkills()






















let portfolioAddToMainPage =async ()=>{

    
  let title11 =document.getElementById("title11")
  let discripction22 =document.getElementById("discripction22")
  let projectName33  =document.getElementById("projectName33")
  let url44  =document.getElementById("url44")
  let imageUrl55 = document.getElementById("imageUrl55")
  let codeUrl66 = document.getElementById("codeUrl66")


  if(title11.value&&discripction22.value&&projectName33.value&&url44.value&&imageUrl55.value&&codeUrl66.value){



  let portfolioDataAddToMainPage ={
    titlePortfolio : title11.value,
    discripctionPortfolio : discripction22.value,
    projectNamePortfolio : projectName33.value,
    url:url44.value,
    imageUrl:imageUrl55.value,
    codeUrl66:codeUrl66.value,

    timestamp : serverTimestamp()
    
}



let dbRef =collection(db,"Portfolio-index-Page")


await  addDoc(dbRef , portfolioDataAddToMainPage)



title11.value=""
discripction22.value=""
projectName33.value=""
url44.value=""
imageUrl55.value=""
codeUrl66.value=""

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

let addPortfoliop = document.getElementById("addPortfolioTO-M")
addPortfoliop.addEventListener("click",portfolioAddToMainPage)












let getMainPagePortfolio =async ()=>{
  let projects22 = document.getElementById("projects22")
  let collectionRef =collection(db,"Portfolio-index-Page")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
projects22.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().titlePortfolio;
let data2 = doc.data().projectNamePortfolio;
let data3 = doc.data().discripctionPortfolio;
let data4 = doc.data().url;
let data5 = doc.data().imageUrl;
let data6 = doc.data().codeUrl66;

// codeUrl66



projects22.innerHTML +=`<div class="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 mb-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl border border-gray-200 dark:border-gray-700">
<!-- Project Image -->
<div class="w-full max-w-md mx-auto mb-4">
<svg viewBox="0 0 500 400" class="w-full h-auto">
  <!-- Laptop Screen Frame -->
  <rect x="50" y="20" width="400" height="250" rx="20" ry="20" fill="#1f2937"/>
  <!-- Bezel -->
  <rect x="65" y="35" width="370" height="220" rx="10" ry="10" fill="#000"/>
  <!-- Screen Image -->
  <clipPath id="screenClip">
    <rect x="70" y="40" width="360" height="210" rx="5" ry="5"/>
  </clipPath>
  <image href="${data5}" x="70" y="40" width="360" height="210" clip-path="url(#screenClip)" preserveAspectRatio="xMidYMid slice"/>
  <!-- Camera dot -->
  <circle cx="250" cy="30" r="3" fill="#555"/>
  <!-- Keyboard Base -->
  <rect x="0" y="270" width="500" height="50" rx="5" ry="5" fill="#374151"/>
  <!-- Hinge -->
  <rect x="150" y="260" width="200" height="10" rx="3" ry="3" fill="#4b5563"/>
  <!-- Touchpad -->
  <rect x="220" y="280" width="60" height="20" rx="4" ry="4" fill="#6b7280"/>
</svg>
</div>


<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-gray-900 dark:text-white">Project</h3>
<button 
  onClick="deleteProjectsMain('${doc.id}')" 
  class="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-lg transition"
  title="Delete Project"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
  Delete
</button>
</div>

<div class="space-y-4 text-lg text-gray-800 dark:text-gray-100 font-[Poppins]">
<p>
  <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">Title</span>
  <span class="block ml-2 text-gray-600 dark:text-gray-300">${data1}</span>
</p>
<p>
  <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">programming language</span>
  <span class="block ml-2 text-gray-600 dark:text-gray-300">${data2}</span>
</p>
<p>
  <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">Description</span>
  <span class="block ml-2 text-gray-600 dark:text-gray-300">${data3}</span>
</p>
<div class="flex gap-4">
  <a href="${data4}" target="_blank" rel="noopener noreferrer"
    class="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">
    Visit Project 🚀
  </a>
  <a href="${data6}" target="_blank" rel="noopener noreferrer"
    class="inline-block px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition">
    View Code 💻
  </a>
</div>
</div>

`
;
      
      
  })
  
})

}

getMainPagePortfolio()



let deleteProjectsMain = async(id)=>{
  await deleteDoc(doc(db, "Portfolio-index-Page", id));
  console.log("test",id);
  
}


window.deleteProjectsMain=deleteProjectsMain



let addAboutMe =async ()=>{

let aboutMeText = document.getElementById("aboutMeText")




if(aboutMeText.value ){



  let addaboutMeData ={
    aboutMeText: aboutMeText.value ,
    timestamp : serverTimestamp()
    
}



let dbRef =collection(db,"About-Me")


await  addDoc(dbRef , addaboutMeData)

aboutMeText.value = ""





Swal.fire({
  icon: 'success',
  title: 'Good job!',
  text: 'Form submitted successfully.'
});

window.location.reload();
}else{
Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Please fill this field!'
  });
}


}


let saveAboutBtn = document.getElementById("saveAboutBtn")
saveAboutBtn.addEventListener("click",addAboutMe)







let getMeAbout =async ()=>{
  let aboutMeget = document.getElementById("aboutMeget")
  let collectionRef =collection(db,"About-Me")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
projects.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().aboutMeText;


aboutMeget.innerHTML+=`
      <div class="md:w-2/3 md:pl-12 relative">
  <h2 class="text-3xl font-bold mb-4 font-sans">About Me</h2>
  <p class="text-gray-300 mb-4 font-serif text-lg leading-relaxed">
    ${data1}
  </p>
  
  <!-- Delete Button -->
  <button 
    class="absolute top-0 right-0 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition-colors duration-300 font-sans font-medium"
    onclick="deleteAboutMee('${doc.id}')"
  >
    <i class="fas fa-trash mr-1"></i> Delete
  </button>
</div>
</div>
</div>`





})})}
getMeAbout()






let deleteAboutMee = async(id)=>{
  await deleteDoc(doc(db, "About-Me", id));
  console.log("test",id);
  window.location.reload();
}

window.deleteAboutMee=deleteAboutMee








let addMyPhotoUrl =async ()=>{

  let profilePhotoUrl = document.getElementById("profilePhotoUrl")
  
  
  
  
  if(profilePhotoUrl.value ){
  
  
  
    let addaboutMeData ={
      profilePhotoUrl: profilePhotoUrl.value ,
      timestamp : serverTimestamp()
      
  }

  

let dbRef =collection(db,"My-Photo-Url")


await  addDoc(dbRef , addaboutMeData)

profilePhotoUrl.value = ""





Swal.fire({
  icon: 'success',
  title: 'Good job!',
  text: 'Form submitted successfully.'
});

window.location.reload();
}else{
Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Please fill this field!'
  });
}


}


let addMyimagebtn = document.getElementById("add-My-image-btn")
addMyimagebtn.addEventListener("click",addMyPhotoUrl)






let getMyimageurl =async ()=>{
  let profilePhotoPreview = document.getElementById("profilePhotoPreview")
  let collectionRef =collection(db,"My-Photo-Url")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
    profilePhotoPreview.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().profilePhotoUrl;


profilePhotoPreview.innerHTML=`
        <div class="flex items-start gap-2">
  <!-- Image Container -->
  <span class="text-gray-400 relative">
    <img src="${data1}" alt="Preview" class="max-w-full h-auto">
  </span>
  
  <!-- Delete Button (now outside) -->
 
</div>

`
let delbtn = document.getElementById("del-btn")
delbtn.innerHTML=` <button class="mt-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition mx-auto" 
          onclick="deleteMyImage('${doc.id}')">
    <i class="fas fa-times text-xs"></i>
  </button>` 



})})}


getMyimageurl()


let deleteMyImage = async(id)=>{
  await deleteDoc(doc(db, "My-Photo-Url", id));
  console.log("test",id);
  window.location.reload();
}

window.deleteMyImage=deleteMyImage







let addMyName =async ()=>{

  let addMyName = document.getElementById("addMyName")
  
  
  
  
  if(addMyName.value ){
  
  
  
    let addMyNameData ={
      addMyName: addMyName.value ,
      timestamp : serverTimestamp()
      
  }

   

let dbRef =collection(db,"My-Name")


await  addDoc(dbRef , addMyNameData)

addMyNameData.value = ""





Swal.fire({
  icon: 'success',
  title: 'Good job!',
  text: 'Form submitted successfully.'
});

window.location.reload();
}else{
Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Please fill this field!'
  });
}


}


let saveNameBtn = document.getElementById("save-Name-Btn")
saveNameBtn.addEventListener("click",addMyName)





let getmyname =async ()=>{
  let currentNameDisplay = document.getElementById("currentNameDisplay")
  let collectionRef =collection(db,"My-Name")
  let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))
  
  await onSnapshot(dbRef,(snapShot)=>{
    currentNameDisplay.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().addMyName;



currentNameDisplay.innerHTML=` Current Name: <span id="nameText">${data1}</span>



<button class="mt-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition mx-auto" 
          onclick="deleteMyName('${doc.id}')">
    <i class="fas fa-times text-xs"></i>
  </button>`


})})}


getmyname()



let deleteMyName = async(id)=>{
  await deleteDoc(doc(db, "My-Name", id));
  console.log("test",id);
  window.location.reload();
}

window.deleteMyName=deleteMyName











let addVoice =async ()=>{

    
  let speechInput =document.getElementById("speechInput")

  
  
if(speechInput.value){

  
  let voiceData ={
    speechInput : speechInput.value,
     
      timestamp : serverTimestamp()
      
  }


  
    
  let dbRef =collection(db,"Voice-Messages")

 
  await  addDoc(dbRef , voiceData)

  speechInput.value=""
 
  
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


let speakBtn = document.getElementById("speakBtn")
speakBtn.addEventListener("click",addVoice)








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
          <p>${data1}</p>

          <button class="mt-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition mx-auto" 
          onclick="deleteMyvoice('${doc.id}')">
    <i class="fas fa-times text-xs"></i>
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


let deleteMyvoice = async(id)=>{
  await deleteDoc(doc(db, "Voice-Messages", id));
  console.log("test",id);
  window.location.reload();
}

window.deleteMyvoice=deleteMyvoice





















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