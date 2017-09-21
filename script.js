let createGrid = function(sizeOfGrid) {
    for (i = 0; i < sizeOfGrid; i++){
        let newDiv = document.createElement("div")
        newDiv.classList.add("boxes");
        newDiv.classList.add("box" + i);
        document.body.getElementsByClassName('container')[0].appendChild(newDiv);
    };
};

let slothify = function(sizeOfGrid) {
    for (i = 0; i < sizeOfGrid; i++){
        let currentDiv = document.body.getElementsByClassName('box' + i)[0]
        console.log(currentDiv);
        currentDiv.style.backgroundImage = "url('./assets/" + i + ".jpg')";
    }
}