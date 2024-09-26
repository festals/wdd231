document.addEventListener("DOMContentLoaded", async() =>{
    const cards = document.getElementById("card");

    async function fetchMembers() {
        const reponse = await fetch('./data/memebers.json');
        const members = await reponse.json();
        return members;
    }

    function renderMembers(members) {
        cards.innerHTML="";
        cards.className = isGridView ? 'grid-view' : 'list-view';

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
    let isGridView = true;
    renderMembers(members, isGridView);
});

