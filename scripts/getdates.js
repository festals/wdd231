const dateContainer = document.querySelector("#currentyear");
const lastModifiedContainer = document.getElementById("lastModified");
const today = new Date()
const year = today.getFullYear()
const lastModified = document.lastModified

dateContainer.innerHTML=year;
lastModifiedContainer.innerHTML= lastModified;