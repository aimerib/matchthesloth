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
}

let slothify = function() {
    let gridSize = document.body.getElementsByClassName('boxes');
    
    for (i = 0; i < gridSize.length; i++){
        let currentDiv = document.body.getElementsByClassName('box' + i)[0]
        console.log(currentDiv.style.backgroundImage)
        currentDiv.style.backgroundImage = "url('./assets/" + randomizer() + ".jpg')";
        console.log(currentDiv.style.backgroundImage)

    }

/*     for (i = 0; i < gridSize.length; i++){
        let currentDiv = document.body.getElementsByClassName('box' + i)[0]
        if (i < gridSize.length/2) {
            currentDiv.style.backgroundImage = "url('./assets/" + i + ".jpg')"; 
        }
            
        
        else  {
            for (j = 0; j < gridSize.length / 2; j++){
            currentDiv.style.backgroundImage = "url('./assets/" + j + ".jpg')";
            console.log(currentDiv.style.backgroundImage = "url('./assets/" + j + ".jpg')")
            }
        }
        
        
    } */
}

