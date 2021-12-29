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
    button.addEventListener("click", removeCard);

    buttonDiv.appendChild(button);
    numberDiv.appendChild(number);

    listComponent.appendChild(numberDiv);
    listComponent.appendChild(buttonDiv);
    
    document.querySelector(".card-list").appendChild(listComponent);
}

const sortCards = () => {
    const list = Array.from(document.querySelectorAll(".card-space"));
    list.sort((a, b) => a.firstElementChild.firstElementChild.innerHTML - b.firstElementChild.firstElementChild.innerHTML);
    cardList.sort((a, b) => a.value - b.value);
    for(let i = 0; i < list.length; i++) {
        document.querySelector(".card-list").appendChild(list[i]);
    }
}


//const xaytarak = () => {
    // const list = document.querySelectorAll(".card-space");
    // cardList.sort((a, b) => a.value - b.value);
    // for(let i = 0; i < cardList.length; i++) {
    //     for(let j = 0; j < cardList.length; j++) {
    //         if(cardList[i].value == list[j].firstElementChild.firstElementChild.innerHTML) {
    //             list[j].parentNode.insertBefore(list[j], list[j].parentNode.lastChild.nextSibling);
    //             break;
    //         }
    //     }
    // }
//}

const removeCard = () => {
    const parentId = event.target.parentNode.parentNode.id;
    const listItem = document.getElementById(parentId);
    let numeberToBeRemoved = + listItem.firstElementChild.firstElementChild.innerHTML;
    cardList.splice(cardList.indexOf(numeberToBeRemoved), 1);
    listItem.parentNode.removeChild(listItem);
}