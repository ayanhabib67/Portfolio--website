import{collection,db,query,orderBy,onSnapshot}from"./firebase.js"



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


projects.innerHTML += `

<div 
  class="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-indigo-500/30 
         transition transform duration-500 hover:scale-[1.03] hover:shadow-2xl group cursor-pointer overflow-hidden"
>
  <!-- Fancy Gradient Border -->
  <div class="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-500 transition duration-500 pointer-events-none"></div>

  <!-- Light Glow on Hover -->
  <div class="absolute inset-0 rounded-3xl bg-indigo-500 opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>

  <!-- Laptop SVG -->
  <div class="w-full max-w-md mx-auto mb-6 overflow-hidden rounded-xl">
    <svg viewBox="0 0 500 400" class="w-full h-auto transition-transform duration-700 group-hover:scale-[1.05]">
      <rect x="50" y="20" width="400" height="250" rx="20" ry="20" fill="#1f2937" />
      <rect x="65" y="35" width="370" height="220" rx="10" ry="10" fill="#000" />
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
      <circle cx="250" cy="30" r="3" fill="#555"/>
      <rect x="0" y="270" width="500" height="50" rx="5" ry="5" fill="#374151"/>
      <rect x="150" y="260" width="200" height="10" rx="3" ry="3" fill="#4b5563"/>
      <rect x="220" y="280" width="60" height="20" rx="4" ry="4" fill="#6b7280"/>
    </svg>
  </div>

  <!-- Card Content -->
  <div class="space-y-5 text-gray-100 font-[Poppins]">
    <div>
      <h2 class="text-2xl font-bold text-indigo-400">Title</h2>
      <p class="text-gray-300 mt-1">${data1}</p>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-indigo-400">Programming Language</h3>
      <p class="text-gray-300 mt-1">${data2}</p>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-indigo-400">Description</h3>
      <p class="text-gray-300 mt-1">${data3}</p>
    </div>

    <div class="flex flex-wrap gap-4 mt-4">
      <a href="${data4}" target="_blank"
        class="inline-block px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-md 
               transition hover:bg-indigo-700 hover:shadow-lg hover:scale-105">
        🚀 Visit Project
      </a>
      <a href="${data6}" target="_blank"
        class="inline-block px-5 py-2.5 bg-gray-700 text-white font-semibold rounded-xl shadow-md 
               transition hover:bg-gray-800 hover:shadow-lg hover:scale-105">
        💻 View Code
      </a>
    </div>
  </div>
</div>
`;


})

})

}

getPortfolio()






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
