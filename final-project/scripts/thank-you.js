// counting visit on a website (num of time they share a picture)
const numbersDisplay = document.getElementById("number-share");

let numShare = Number(window.localStorage.getItem("numShare-ls")) || 0;

if (numShare == 0) {
	numbersDisplay.textContent = `This is the first time you share a picture with us. 🥳 Welcome!`;
    numShare = 1;
} else {
    numbersDisplay.innerHTML = `This is the ${numShare} picture you shared with us. Thank you!`;
}

numShare++;

localStorage.setItem("numShare-ls", numShare);


//info
const currentUrl = window.location.href;

const formInformation = currentUrl.split("?");

let formData = formInformation[1].split("&");

const show = (key) => {
    let result;
    formData.forEach((element => {
        if (element.startsWith(key)) {
            result = element.split("=")[1].replace("%40", "@").replace("+", " ").replace("%2B", "+");
        }  
    })); 
    return (result);
}

const showInfo = document.getElementById("show-info");
showInfo.innerHTML = `
<h4>Name of the photograph:</h4>
<p>${show("phname")}</p>
<h4>Title:</h4>
<p>${show("title")}</p>
<h4>Email:</h4>
<p>${show("email")}</p>
<h4>Type:</h4>
<p>${show("memoryrepair")}</p>
<h4>Description: </h4>
<p>${show("description")}</p>
` 