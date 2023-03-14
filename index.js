function populateGameContainer(size){
    let gameContainer = document.querySelector('.gameContainer');
    let squares = gameContainer.querySelectorAll('div')
    squares.forEach(div=> div.remove)

    gameContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gameContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    let amount = size * size
    for (let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'white';
        gameContainer.insertAdjacentElement('beforeend', square);
    }
}


populateGameContainer(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
        populateGameContainer(input)
    }
    else{console.log("Too many squares")}
}

function colorSquare(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard() {
    let gameContainer = document.querySelector('.gameContainer');
    let squares = gameContainer.querySelectorAll('div')
    squares.forEach(div=> div.style.backgroundColor = "white")
}