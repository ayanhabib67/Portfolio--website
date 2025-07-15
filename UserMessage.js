

import{collection,db,orderBy,onSnapshot,query, onAuthStateChanged,auth,deleteDoc,doc}from"./firebase.js"




onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;





let getPortfolio =async ()=>{
    let projects = document.getElementById("projects")
    let collectionRef =collection(db,"messageData")
let dbRef  =query(collectionRef , orderBy("timestamp" , "asc"))

await onSnapshot(dbRef,(snapShot)=>{
projects.innerHTML=``
snapShot.forEach((doc)=>{
let data1 = doc.data().email;
let data2 = doc.data().message;
let data3 = doc.data().name;
let data4 = doc.data().subject;


projects.innerHTML += `
  <div class="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:-translate-y-1">
    <h3 class="text-xl font-semibold text-indigo-400 mb-3">From: ${data3} (${data1})</h3>
    <p class="text-gray-300 whitespace-pre-wrap">Subject :${data4}</p>
    <p class="text-gray-300 whitespace-pre-wrap">Message :${data2}</p>

     <button 
    onClick="deleteUserMessage('${doc.id}')" 
    class="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-lg transition"
    title="Delete Project"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    Delete
  </button>
</div>
  </div>
`;


})

})

}

getPortfolio()





} else {
    location="index.html"
}
});





let deleteUserMessage = async(id)=>{
  await deleteDoc(doc(db, "messageData", id));
  console.log("test",id);
  
}


window.deleteUserMessage=deleteUserMessage













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