const cardList = [];

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const addCards = () => {
    const card = {id: new Date().valueOf(), value: generateRandomNumber()};
    cardList.push(card);

    const listComponent = document.createElement("li");
    listComponent.className = "card-space";
    listComponent.id = card.id

    const numberDiv = document.createElement("div");
    numberDiv.className = "card-number";

    const number = document.createElement("h1");
    number.className = "number";
    number.innerHTML = card.value;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "card-button";

    const button = document.createElement("button");
    button.className = "button";
    button.innerHTML = "X";
    button.addEventListener("click", () => removeCard(card.id));

    buttonDiv.appendChild(button);
    numberDiv.appendChild(number);

    listComponent.appendChild(numberDiv);
    listComponent.appendChild(buttonDiv);
    
    document.querySelector(".card-list").appendChild(listComponent);
}

const sortCards = () => {
    if(cardList.length === 1) return;
    cardList.sort((a, b) => a.value - b.value);
    for(let i = 0; i < cardList.length; i++) {
        let item = document.getElementById(cardList[i].id);
        document.querySelector(".card-list").appendChild(item);
    }
}

const removeCard = (id) => {
    const listItem = document.getElementById(id);
    listItem.parentNode.removeChild(listItem);
    cardList.splice(cardList.findIndex(x => x.id == id), 1);
}