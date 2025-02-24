let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let tablink;
let tabcontent;

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//My Messages JavaScript

const scriptURL = 'https://script.google.com/macros/s/AKfycbxKY7GAMxZPJgZOX6Vmw17yGb2v5MH_ltaZNrimFZcyrcfQdKGW-shhfvEMySoanJcdhg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { 
            msg.innerHTML = "Message Sent Successfully!";
            setTimeout(function(){
            msg.innerHTML = ""
            }, 3000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
});
