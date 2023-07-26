
var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");            
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");            
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// ---------------for menubars-----------
var Sidemenu=document.getElementById("sidemenu");
function openmenu(){
    Sidemenu.style.right="0";
}
function closemenu(){
    Sidemenu.style.right="-200px";
}


// -----------url sheet------------
  const scriptURL = "https://script.google.com/macros/s/AKfycbx2u1U42KY7IGuWRTrYocZuX3WGEqdxr9zioYcSjGeXIs9L-2bVR-gJYCpefnSzEMeE/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{msg.innerHTML="message sent succesfully"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })




