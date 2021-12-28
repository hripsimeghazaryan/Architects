// function to generate random numbers from 0 to 100 
const generateRandomNumber = () => Math.floor(Math.random() * 101);
const listNumbers = [];
let currentId = 0;

// template for each list item in the list
const listItemTemplate = (numberGenerator) => {
    let generatedNumber = numberGenerator();
    listNumbers.push(generatedNumber);
    return (
        `<li class="card-space" id="${++currentId}">
            <div class="card-number">
                <h1 class="number">${generatedNumber}</h1>
            </div>
            <div class="card-button">
                <button class="button" onclick="removeCard(${currentId})">X</button>
            </div>
        </li>`
    )
}

// function to add cards in the given number
const addCards = (numberOfCards) => {
    const cardList = document.querySelector(".card-list");
    for(let i = 1; i <= numberOfCards; i++) {
        cardList.innerHTML += listItemTemplate(generateRandomNumber);
    }
}

// sorting current numbers in the list
const sortCards = () => {
    const cardList = document.querySelectorAll(".number");
    listNumbers.sort((a, b) => a - b);
    for(let i = 0; i < listNumbers.length; i++) {
        cardList[i].innerHTML = listNumbers[i];
    }
}

// remove card given it's id number 
const removeCard = (id) => {
    const listItem = document.getElementById(id);
    let numeberToBeRemoved = + listItem.firstElementChild.firstElementChild.innerHTML;
    listNumbers.splice(listNumbers.indexOf(numeberToBeRemoved), 1);
    listItem.parentNode.removeChild(listItem);
}

window.addEventListener("load", () => addCards(6));