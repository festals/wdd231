const memoriesJSON = "data/memories.json";


async function getMemoryInfo() {
    try {
        const response = await fetch(memoriesJSON);
        if (response.ok) {
            const data = await response.json();
            displayMemory(data.memories);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    };
};

const displayMemory = (memories) => {
    memories.forEach(memory => {
        const card = document.createElement("section");
        const memoryImg = document.createElement("img")
        const memoryName = document.createElement("h3")
        const memoryButton = document.createElement("button")

        memoryImg.setAttribute ("href", memory.image);
        memoryName.innerHTML = memory.name;
        memoryButton.innerHTML = "SEE";

        card.classList.add(memory.memoryName);
        card.appendChild(memoryName);
        card.appendChild(memoryButton);
        card.appendChild(memoryImg);

        const memoryCard = document.getElementById("memories");
        memoryCard.appendChild(card);

        memoryButton.addEventListener("click", () => {
            displayMemoryInfo(memory);
        })

    });
}

getLevelsInfo()


//Modal cards
const displayMemoryInfo = (memory) => {
    const memoriesModal = document.getElementById("memories-info");

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