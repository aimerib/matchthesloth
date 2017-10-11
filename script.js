let createGrid = function(sizeOfGrid) {
    for (i = 0; i < sizeOfGrid; i++){
        let newDiv = document.createElement("div")
        newDiv.classList.add("boxes");
        newDiv.classList.add("box" + i);
        document.body.getElementsByClassName('container')[0].appendChild(newDiv);
    };
};

let randomizer = function() {
    let gridSize = document.body.getElementsByClassName('boxes');
    return Math.floor(Math.random() * gridSize.length/2);
};

let slothify = function() {
    let gridSize = document.body.getElementsByClassName('boxes');
    
    for (i = 0; i < gridSize.length; i++){
        let getImageNumber = function() {
            let test = getComputedStyle(document.body.getElementsByClassName('box' + i)[0]).backgroundImage
            let testSplit = test.split('/');
            let realurl = testSplit[testSplit.length - 1];
            let imageNumber = realurl.split('.');
            return imageNumber[0];
        }
        let currentDiv = document.body.getElementsByClassName('box' + i)[0]
       
        
        if (getComputedStyle(document.body.getElementsByClassName('box' + i)[0]).backgroundImage === 'none'){
            

            let randomNumber = randomizer()
            let bgURL = "url('./assets/" + randomizer() + ".jpg')";
            currentDiv.style.backgroundImage = bgURL
            
            console.log(getImageNumber());
           
            
        }
        else if (digetComputedStyle(document.body.getElementsByClassName('box' + i)[0]).backgroundImage === 'box' + i) {console.log("Iwasthesame")};

    }
}

