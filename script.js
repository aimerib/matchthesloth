let createGrid = function(sizeOfGrid) {
    for (i = 0; i < sizeOfGrid; i++){
        let newDiv = document.createElement("div")
        newDiv.classList.add("boxes");
        newDiv.classList.add("box" + i);
        document.body.getElementsByClassName('container')[0].appendChild(newDiv);
    };
};

let randomizer =  a => Math.floor(Math.random() * a)

let createArray = (x,y) => {
    let array = [];
    for (i = 0; i < x ; i++) {
        array.push([]);
        for (j = 0; j < y; j++){
            array[i][j]=0;
            
        } 
    }
    return array
}




let test = createArray(4,4);
let counter = test[0].length * test.length
console.log(counter);
while (counter > 0) {
    console.log("test");
    counter--
}


let slothify = () => {
    let gridSize = document.body.getElementsByClassName('boxes');
    let counter = 0
    
/*     for (i = 0; i < gridSize.length; i++){
        let currentGridPosition = randomizer(gridSize.length);
        let currentDiv = document.body.getElementsByClassName('box' + currentGridPosition)[0]
        console.log(currentDiv);
        console.log(currentGridPosition);
   
    } */
    








    
    /* for (i = 0; i < gridSize.length; i++){
        
        let currentDiv = document.body.getElementsByClassName('box' + i)[0]
       
        
        if (getComputedStyle(document.body.getElementsByClassName('box' + i)[0]).backgroundImage === 'none'){
            

            let randomNumber = randomizer()
            let bgURL = "url('./assets/" + randomizer() + ".jpg')";
            currentDiv.style.backgroundImage = bgURL
            
            console.log(getImageNumber());
           
            
        }
        

    } */
}



let getImageNumber = function() {
    let test = getComputedStyle(document.body.getElementsByClassName('box' + i)[0]).backgroundImage
    let testSplit = test.split('/');
    let realurl = testSplit[testSplit.length - 1];
    let imageNumber = realurl.split('.');
    return imageNumber[0];
}