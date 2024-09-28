
const url = "data/members.json";
const cards = document.getElementById("cards");

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getData();

const displayMembers = (members) => {
    cards.innerHTML="";
    
    members.forEach((member) =>{
        let card = document.createElement('div');
        card.classList.add("card");

        card.innerHTML=`
                    <img src ="images/${member.image}" alt="${member.name}">
                    <p><b>${member.name}</b></p>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <p>${member.email}</p> `;
        cards.appendChild(card);
    });
};


const list = document.getElementById("list");
const grid = document.getElementById("grid");

list.addEventListener("click", showList);

function showList(){
    cards.classList.add("list");
    cards.classList.remove("grid");
}
