const url = "data/members.json";
const cards = document.getElementById("cards");

async function getMemberLevelData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembersLevel(data.members);
}

const getLevel = (members) =>{
    return members.filter(member => member.membershipLevel === 1|| member.membershipLevel === 2);
};

const getRandom = (members, num) => {
    let shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

const displayMembersLevel = (members) => {
    const goldAndSilver = getLevel(members);
    const randomCompanies = getRandom(goldAndSilver, 3);

    members.forEach(compagnie =>{
        const card = document.createElement("div");  //or let
        card.classList.add("card");
        const compagnieLevel = document.createElement("p");

        card.innerHTML=`
                    <img src ="images/${compagnie.image}" alt="${compagnie.name}">
                    <p><b>${compagnie.name}</b></p>
                    <p>${compagnie.address}</p>
                    <p>${compagnie.phone}</p>
                    <p><a href="${compagnie.website}" target="_blank">${compagnie.website}</a></p>
                    `; 
        
        if (compagnie.membershipLevel === 1){
            compagnieLevel.innerHTML = `Membership level: Gold`
        } else if (compagnie.membershipLevel === 2) {
            compagnieLevel.innerHTML = `Membership level: Silver`
        }

        card.appendChild(compagnieLevel);
        cards.appendChild(card);
    })
}

getMemberLevelData(url);