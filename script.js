const createGrid = function(sizeOfGrid) {
    for (i = 0; i < sizeOfGrid; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("boxes");
        newDiv.classList.add("box" + i);
        document.body.getElementsByClassName('container')[0].appendChild(newDiv);
    };
};

const randomizer =  a => Math.floor(Math.random() * a)

const createArray = (x,y) => {
    const array = [];
    for (i = 0; i < x ; i++) {
        array.push([]);
        for (j = 0; j < y; j++){
            array[i][j]=0;
            
        } 
    }
    return array
}




const test = createArray(4,4);
const counter = test[0].length * test.length
console.log(counter);
while (counter > 0) {
    console.log("test");
    counter--
}


const slothify = () => {
    const gridSize = document.body.getElementsByClassName('boxes');
    const counter = 0
    
/*     for (i = 0; i < gridSize.length; i++){
        const currentGridPosition = randomizer(gridSize.length);
        const currentDiv = document.body.getElementsByClassName('box' + currentGridPosition)[0]
        console.log(currentDiv);
        console.log(currentGridPosition);
   
    } */
    








    
    /* for (i = 0; i < gridSize.length; i++){
        
        const currentDiv = document.body.getElementsByClassName('box' + i)[0]
       
        
        if (getComputedStyle(document.body.getElementsByClassName('box' + i)[0]).backgroundImage === 'none'){
            

            const randomNumber = randomizer()
            const bgURL = "url('./assets/" + randomizer() + ".jpg')";
            currentDiv.style.backgroundImage = bgURL
            
            console.log(getImageNumber());
           
            
        }
        

    } */
}



const getImageNumber = function() {
    const test = getComputedStyle(document.body.getElementsByClassName('box' + i)[0]).backgroundImage
    const testSplit = test.split('/');
    const realurl = testSplit[testSplit.length - 1];
    const imageNumber = realurl.split('.');
    return imageNumber[0];
}