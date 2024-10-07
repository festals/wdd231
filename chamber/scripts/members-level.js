const url = "data/members.json";
const cards = document.getElementById("filtered-cards");

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members.filter(member => member.membershipLevel <= 2).sort(() => 0.5 - Math.random()).slice(0,3));
}

getData(url);

// function shuffle(members) {
//     let shuffled = members.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 3);
// }

const displayMembers = (members) => {
    
    cards.innerHTML="";
    
    members.forEach((member) =>{
        let card = document.createElement('div');
        card.classList.add("card");
        const level = document.createElement("p");

        level.innerHTML =`Membership level: ${member.membershipLevel}`;

        if (member.membershipLevel == 1){
                level.innerHTML = `Membership level: Gold`
            } else if (member.membershipLevel == 2) {
                level.innerHTML = `Membership level: Silver`
            }

        card.innerHTML=`
                    <img src ="images/${member.image}" alt="${member.name}">
                    <p><b>${member.name}</b></p>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    `;
        card.appendChild(level);
        cards.appendChild(card);
    });
};
