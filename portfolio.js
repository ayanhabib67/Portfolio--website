

import{collection,serverTimestamp,db,addDoc,query,orderBy,onSnapshot}from"./firebase.js"

let submitMessage = async()=>{

    
    let name  = document.getElementById("name")
    let email  = document.getElementById("email")
    let message  = document.getElementById("message")
    
    
    if(name.value||email.value||message.value){

        
        let Usermessage ={
            name : name.value,
            email : email.value,
    message : message.value,
    timestamp : serverTimestamp()
    
}
    
    
    


let dbRef =collection(db,"messageData")


await  addDoc(dbRef , Usermessage)


console.log("todo added");

console.log(Usermessage);





name.value=""
email.value=""
message.value=""
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




projects.innerHTML +=`






<div 
class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 
transition-all duration-300 ease-in-out 
hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-600
group cursor-pointer"
data-aos="fade-up"
>
  <!-- Laptop SVG with hover-scale effect -->
  <div class="w-full max-w-md mx-auto mb-4 overflow-hidden rounded-lg">
    <svg viewBox="0 0 500 400" class="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-[1.03]">
      <!-- Laptop Structure (unchanged) -->
      <rect x="50" y="20" width="400" height="250" rx="20" ry="20" fill="#1f2937" class="transition-colors duration-300 group-hover:fill-gray-800"/>
      <rect x="65" y="35" width="370" height="220" rx="10" ry="10" fill="#000"/>
      
      <!-- Screen Image with brightness adjustment -->
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
      />
      
      <!-- Laptop Details (unchanged) -->
      <circle cx="250" cy="30" r="3" fill="#555"/>
      <rect x="0" y="270" width="500" height="50" rx="5" ry="5" fill="#374151"/>
      <rect x="150" y="260" width="200" height="10" rx="3" ry="3" fill="#4b5563"/>
      <rect x="220" y="280" width="60" height="20" rx="4" ry="4" fill="#6b7280"/>
    </svg>
  </div>

  <!-- Content with hover-triggered text glow -->
  <div class="space-y-4 text-lg text-gray-800 dark:text-gray-100 font-[Poppins]">
    <p class="transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
      <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">Title</span>
      <span class="block ml-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">${data1}</span>
    </p>
    <p class="transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
      <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">programming language</span>
      <span class="block ml-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">${data2}</span>
    </p>
    <p class="transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
      <span class="block text-xl font-extrabold text-indigo-700 dark:text-indigo-400">Description</span>
      <span class="block ml-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">${data3}</span>
    </p>
    
    <!-- Buttons container -->
    <div class="flex flex-wrap gap-3">
      <!-- Visit Project Button -->
      <a href="${data4}" target="_blank" rel="noopener noreferrer"
        class="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow 
               transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:animate-pulse">
        Visit Project 🚀
      </a>
      
      <!-- View Code Button -->
      <a href="${data6}" target="_blank" rel="noopener noreferrer"
        class="inline-block px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow 
               transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
        View Code 💻
      </a>
    </div>
  </div>
</div>
`
;
        
        
    })
    
})

}

getPortfolio()













