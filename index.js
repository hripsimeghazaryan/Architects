const cardList = [];

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const createListItem = () => {
    let cardItem = {id: new Date().valueOf(), value: generateRandomNumber()};
    cardList.push(cardItem);
    addCards();
}

const listItemTemplate = (cardItem) => {
    return (
        `<li class="card-space" id="${cardItem.id}">
            <div class="card-number">
                <h1 class="number">${cardItem.value}</h1>
            </div>
            <div class="card-button">
                <button class="button" onclick="removeCard()">X</button>
            </div>
        </li>`
    )
}

const addCards = () => {
    const listItems = document.querySelector(".card-list");
    listItems.innerHTML = "";
    for(let i = 0; i < cardList.length; i++) {
        listItems.innerHTML += listItemTemplate(cardList[i]);
    }
}

const sortCards = () => {
    const cardNumbers = document.querySelectorAll(".number");
    cardList.sort((a, b) => a.value - b.value);
    for(let i = 0; i < cardList.length; i++) {
        cardNumbers[i].innerHTML = cardList[i].value;
    }
}

const removeCard = () => {
    const parentId = event.target.parentNode.parentNode.id;
    const listItem = document.getElementById(parentId);
    let numeberToBeRemoved = + listItem.firstElementChild.firstElementChild.innerHTML;
    cardList.splice(cardList.indexOf(numeberToBeRemoved), 1);
    listItem.parentNode.removeChild(listItem);
}