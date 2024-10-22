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

        memoryImg.setAttribute("src", memory.image);
        memoryImg.setAttribute("alt", "icon of sand yachting");
        memoryImg.setAttribute("loading", "lazy");
        // memoryImg.setAttribute("width", "550");
    
        memoryName.innerHTML = memory.name;
        memoryButton.innerHTML = "See Details";

        card.classList.add(memory.memoryName);
        card.appendChild(memoryName);
        card.appendChild(memoryButton);
        card.appendChild(memoryImg);

        const memoryCard = document.getElementById("memory");
        memoryCard.appendChild(card);

        memoryButton.addEventListener("click", () => {
            displayMemoryInfo(memory);
        })

    });
}

getMemoryInfo()


//Modal cards
const displayMemoryInfo = (memory) => {
    const memoriesModal = document.getElementById("memories-info");


    memoriesModal.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${memory.name}</h2>
    <img src="${memory.image}" width="400">
    <p>Photographed by: ${memory.photograph}</p>
    <p>Date: ${memory.date}</p>
    <p>Description: ${memory.description}</p>
    `;

    memoriesModal.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        memoriesModal.close();
    });
}

const memo = document.getElementById("memory-button");
const eventB = document.getElementById("event-button");


memo.addEventListener("click", () => {
    displayMemory(data.memories.filter(memory => memory.type = "memory"));
});

eventB.addEventListener("click", () => {
    displayMemory(memories.filter(memory => memory.type == "event"));
});
