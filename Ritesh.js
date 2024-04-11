var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6fIWhKzdAUw4YI1NnroQeiWxPPfaDW1prMc0kkORhIoqoK1Vhx6ED1ROvOZKuTRvH/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
});

let links="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js";
let link2="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";