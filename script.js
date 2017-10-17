


const shuffle = function (array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
};

const generateGameMap = function(boardSize = 16){
    const size = boardSize;            
    
    const halfSize = size/2;
    const arrayMap1 = shuffle(Array.from(Array(halfSize).keys()));
    const arrayMap2 = shuffle(Array.from(Array(halfSize).keys()));
    let gameMap = arrayMap1.concat(arrayMap2);
    return gameMap;
};

const slothCard = function() {
    this.number = 0,
    this.isFaceDown = true;
};

const createBoard = function (){
    const board = [];
    const gameMap = generateGameMap();
    for (let i = 0; i < gameMap.length; i++){
        let sloth1 = new slothCard;
        sloth1.number = gameMap[i];
        board.push(sloth1);

    }
    return board;
};

const createGrid = function(sizeOfGrid) {
    for (let i = 0; i < sizeOfGrid; i++){
        const cardContainer = document.createElement('div');
        const card = document.createElement('div');
        const frontDiv = document.createElement('div');
        const backDiv = document.createElement('div');

        cardContainer.classList.add('cardContainer');
        card.classList.add('card');
        backDiv.classList.add('backFace');
        backDiv.classList.add('backFace' + i);
        frontDiv.classList.add('frontFace');

        document.body.getElementsByClassName('container')[0].appendChild(cardContainer);
        document.body.getElementsByClassName('cardContainer')[i].appendChild(card);
        document.body.getElementsByClassName('card')[i].appendChild(frontDiv);
        document.body.getElementsByClassName('card')[i].appendChild(backDiv);
    }
};
 

const slothify = () => {
    
    const emptyCards = document.body.getElementsByClassName('backFace');
    const board = createBoard();
    
        
    for (let i = 0; i < emptyCards.length; i++){
        const currentDiv = document.body.getElementsByClassName('backFace' + i )[0];
        const isBackFaceEmpty = () => 
            getComputedStyle(currentDiv).backgroundImage === 'none' ? true : false;

        
        
        if (isBackFaceEmpty()){
            const bgURL = 'url("./assets/' + board[i].number + '.jpg")';
            currentDiv.style.backgroundImage = bgURL;
        }
    } 
};

createGrid(16);
slothify();


const container = document.body.getElementsByClassName('container')[0];
let counter = 0;
container.addEventListener('click', (el) => {
        console.log(el);
    const isNotContainer = () => el.path[0].classList[0] !== 'container' ? true : false;
    const isNotCardContainer = () => el.path[0].classList[0] !== 'cardContainer' ? true : false;
    const isNotFlipped = () => el.path[1].classList[1] !== 'flipped' ? true : false;
    if(isNotContainer()&& isNotCardContainer() && isNotFlipped()){
        el.path[1].classList.add('flipped');
        counter++;
    }
    if(counter >= 2){
        setTimeout(checkMatch, 1000);
    }
});

const unflip = function (card1, card2) {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
};
const hideCard = function (card1, card2) {
    card1.classList.add('hidden');
    card2.classList.add('hidden');
};

const checkMatch = function (){
    const card1 = document.body.getElementsByClassName('flipped')[0];
    const card2 = document.body.getElementsByClassName('flipped')[1];
    const isMatch = () => card1.children[1].style.backgroundImage === card2.children[1].style.backgroundImage ? true : false;
    if (isMatch()){
        unflip(card1, card2);
        hideCard(card1, card2);
        counter = 0;
    }
    else {
        unflip(card1, card2);
        counter = 0;
    }
    
};