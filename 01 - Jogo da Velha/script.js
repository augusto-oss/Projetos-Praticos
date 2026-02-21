// Dados iniciais
let square = {
    a1: '', a2:'', a3:'',
    b1: '', b2:'', b3:'',
    c1: '', c2:'', c3:'',
};

let player = ''; // Quem é a vez


let warning = '';


let playing = false;

//Reset
document.querySelector('.reset'),addEventListener('click', reset)


//Marcação

//document.querySelector('div[data-item=a1]'),addEventListener('click', itemClick)
document,querySelectorAll('.item') .forEach(item =>{
    item.addEventListener('click', itemClick)
})

//Funções

function itemClick(event){
    let item = event.target.getAttribute('data-item')
    console.log(item)

    if(playing && square [item] === ''){
        square[item] = player;
        renderSquare();
        togglePlayer
    }
}

function tooglePlayer(){
    player = (player === 'x' ? 'O' : 'X')
    renderInfo();
}

function reset(){
    warning - '';

    let random =  Math.floor (Math.random() * 2) // Varia entre 0 e 1

    player = (random === 0) ? 'X' : 'O'


    for (let i in square)
        square[1] = ''
    
    playing = true

    function renderSquare(){
        
            for (let i in square) {
              let item = document.querySelector(`div[data-item=${i}]`)}

        if(square[1] !== ''){
            item.innerHTML = square[1];
        } else {
            item.innerHTML = '';
        }
    }

    checkGame();
}

    function renderInfo(){
        document.querySelector('.vez').innerHTML = player;
        document.querySelector('.resultado').innerHTML = warning;
    }

    function checkGame(){
        if(checkWinner('X')){
            warning = '"x" Venceu!'
            playing = false
        }   else if(checkWinner('O')){
            warning = '"O" Venceu!'
            playing = false
        } else if(tieGame()){
            warning = 'Empate!'
            playing = false
        }

    }

    function checkWinner(){
        let pos = [
        //Horinzotal 
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        
        //Vertical
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        
        //Diagonal 
        'a1,b2,c3',
        'a3,b2,c1'
        ]
    }

    for(let w in pos){
        let pArray = pos[w].split(',')

        let hasWib = pArray.every(option => square [option] === player);

        if(hasWon){
            return true
        }
    }

    return false


    function tieGame(){
        for(let i in square){
            if(square[i] === ''){
                return false
            }
        }
        return true
    }