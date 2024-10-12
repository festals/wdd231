const levelsJSON = "data/membership-levels.json";

// timestamp hidden
function getCurrentTimestamp() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });

    console.log(formattedDateTime);
    return formattedDateTime;
}

window.onload = function () {
    const timestampField = document.getElementById("timestamp");
    timestampField.value = getCurrentTimestamp();
};


// membership level cards
async function getLevelsInfo() {
    try {
        const response = await fetch(levelsJSON);
        if (response.ok) {
            const data = await response.json();
            displayLevels(data.membershipLevels);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    };
};

const displayLevels = (membershipLevels) => {
    membershipLevels.forEach(level => {
        const card = document.createElement("section");
        const levelName = document.createElement("h3")
        const levelButton = document.createElement("button")

        levelName.innerHTML = level.name;
        levelButton.innerHTML = "Learn More";

        card.classList.add(level.levelName);
        card.appendChild(levelName);
        card.appendChild(levelButton);

        if (level.name === "Bronze Membership"){
            card.classList.add("bronze");
        }
        else if (level.name === "Silver Membership"){
            card.classList.add("silver")
        }
        else if(level.name === "Gold Membership"){
            card.classList.add("gold")}
        
        else {card.classList.add("normal")}

        const levelCard = document.getElementById("levels");
        levelCard.appendChild(card);

        levelButton.addEventListener("click", () => {
            displayLevelDetails(level);
        })

    });
}

getLevelsInfo()


//Modal cards
const displayLevelDetails = (level) => {
    const membershipModal = document.getElementById("levelsInfo");

    const benefitsList = document.createElement("ul");

    level.benefits.forEach(benefit => {
        const list = document.createElement("li");
        list.innerHTML = benefit;
        benefitsList.appendChild(list);
    });

    membershipModal.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${level.name} Level</h2>
    <h4>Cost: ${level.cost} Dollars Per Year</h4>
    <h3>Benefits:</h3>
    `;

    membershipModal.appendChild(benefitsList);

    membershipModal.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        membershipModal.close();
    });
}