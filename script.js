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
        const card = document.createElement('div');
        const newFrontDiv = document.createElement('div');
        const newBackDiv = document.createElement('div');
        newFrontDiv.classList.add('frontFace');
        newBackDiv.classList.add('backFace');
        newBackDiv.classList.add('backFaceflipped');
        newBackDiv.classList.add('backFace' + i);
        card.classList.add('box');
        document.body.getElementsByClassName('container')[0].appendChild(card);

        document.body.getElementsByClassName('box')[i].appendChild(newFrontDiv);
        document.body.getElementsByClassName('box')[i].appendChild(newBackDiv);
    }
};
 

const slothify = () => {
    const gridSize = document.body.getElementsByClassName('backFace');
    const board = createBoard();
        
    for (let i = 0; i < gridSize.length; i++){
        const currentDiv = document.body.getElementsByClassName('backFace' + i )[0];
        
        if (getComputedStyle(document.body.getElementsByClassName('backFace' + i)[0])
            .backgroundImage === 'none'){
            const bgURL = 'url("./assets/' + board[i].number + '.jpg")';
            currentDiv.style.backgroundImage = bgURL;
        }
    } 
};