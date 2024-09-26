document.addEventListener("DOMContentLoaded", async() =>{
    const cards = document.getElementById("card");

    async function fetchMembers() {
        const response = await fetch('./data/members.json');
        const members = await response.json();
        return members;
    }

    function renderMembers(members) {
        cards.innerHTML="";

        members.foreach(member => {
            const memberCard = document.createElement("div");

            memberCard.innerHTML=`
                <img src ="./images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.email}</p>
            `;
            cards.appendChild(memberCard);
        });
    }

    const members = await fetchMembers();
    renderMembers(members);
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


