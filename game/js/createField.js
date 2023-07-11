import { createCards } from "./cards.js";
import { createMenu } from "./createMenu.js";

const gameWin=()=>{
    const card = document.querySelectorAll(".card")
    let flag = true;
    card.forEach(el => {
    if(!el.classList.contains("rotate")){
        flag = false;
    }
    })
        return flag;
}

export const createField=(lvl)=>{
    let statusGame=true;

    const main = document.querySelector("main");
    main.classList.add("none");


    console.log(lvl)
    let lvltext;

    switch(lvl){
    case 8:
            lvltext="ПАЦЕФИСТ";
            break;
        case 12:
            lvltext="НЕЙТРАЛ";
            break;
        case 16:
        lvltext="ГЕНОЦИД";
        break;



    }


    const game = document.querySelector(".game");
    game.style.display = 'block';

    const level = game.querySelector(".lvl");
    level.textContent = lvltext;

    const menu = game.querySelector(".btn");
    menu.addEventListener('click',()=>{
        createMenu();

    })

    const cards = createCards(lvl);
    console.log(cards);

    const gameCards=game.querySelector(".game-cards");
    gameCards.innerHTML = "";

    let prev  = null 
    cards.forEach(el=>{
    const card= document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${el.back})`;
    gameCards.appendChild(card);

    card.addEventListener('click',() => {
        if(statusGame==true && !card.classList.contains("rotate")){
            console.log(prev);
            console.log(card);
            card.classList.add("rotate")
            card.style.backgroundImage = `url(${el.img})`;
            if (prev == null) {
                prev = card;     
            }
            else {
                if (prev.style.backgroundImage == card.style.backgroundImage){
                    prev = null;
                if (gameWin()){  
                    createMenu()            
                }
                
                }
                else {
                    statusGame=false;
                    const time = setTimeout(()=>{
                        
                        card.classList.remove("rotate")
                        card.style.backgroundImage = `url(${el.back})`;
                        prev.classList.remove("rotate")
                        prev.style.backgroundImage = `url(${el.back})`;
                        prev=null;
                        statusGame=true;
                    }, 1000);
                    
                    time;
                }
    
            }

        }
    }) 

})
}