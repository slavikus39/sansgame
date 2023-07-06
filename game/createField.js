import { createMenu } from "./createMenu.js";

export const createField=(lvl)=>{
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








}

