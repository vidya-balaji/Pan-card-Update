const cardsArray = [
    {
        name:'Pow',
        icon:'<i class="fa-solid fa-paw"></i>'
    },

    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },

    {
        name:'Fish',
        icon:'<i class="fa-solid fa-fish"></i>'

    },

    {
        name:'Feather',
        icon:'<i class="fa-solid fa-feather-pointed"></i>'
    },
    
    {
        name:'spider',
        icon: '<i class="fa-solid fa-spider"></i>'
    },

    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
     

    {
        name:'Pow',
        icon:'<i class="fa-solid fa-paw"></i>'
    },

    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },

    {
        name:'Fish',
        icon:'<i class="fa-solid fa-fish"></i>'

    },

    {
        name:'Feather',
        icon:'<i class="fa-solid fa-feather-pointed"></i>'
    },
    
    {
        name:'spider',
        icon: '<i class="fa-solid fa-spider"></i>'
    },

    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
     

];
let flippedcards =[];
let matchedcount =0;
shufflecards();
const gameBoard = document.getElementById('gameBoard');
displaycards();

function shufflecards(){
    for(i=cardsArray.length-1;i>=0;i--){
        const randomIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randomIndex]]=[cardsArray[randomIndex],cardsArray[i]]
    }
}

function displaycards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card=document.createElement('div');
        gameBoard.append(card);
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        card.addEventListener('click',flipcard);
    })

}
function flipcard(){
    if(flippedcards.length<2 && this.classList.contains('active')){
        let cardId = this.getAttribute('id');
        flippedcards.push(this);
        this.classList.remove('cardback');
        this.innerHTML = cardsArray[cardId].icon;
        if(flippedcards.length==2)
        {
    
            setTimeout(checkmatch,1000);
        }
    }

}


function checkmatch()

{
    const card1Id = flippedcards[0].getAttribute('id');
    const card2Id = flippedcards[1].getAttribute('id');

    if(cardsArray[card1Id].name===cardsArray[card2Id].name){
        flippedcards[0].style.border = 'none';
        flippedcards[0].style.backgroundcolor = ' hsl(36, 100%, 90%)';
        flippedcards[0].innerHTML= '';
        flippedcards[0].classList.remove('active');
        flippedcards[1].style.border = 'none';
        flippedcards[1].style.backgroundcolor = ' hsl(36, 100%, 90%)';
        flippedcards[1].innerHTML= '';
        flippedcards[1].classList.remove('active');
        matchedcount++;
        checkGameOver();
    }
    else{
        flippedcards[0].innerHTML= '';
        flippedcards[0].classList.add('cardback');
        flippedcards[1].innerHTML= '';
        flippedcards[1].classList.add('cardback');
    }
    flippedcards = [];
   
}
function checkGameOver(){
    if (matchedcount==cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('Won');
        
    }
}
