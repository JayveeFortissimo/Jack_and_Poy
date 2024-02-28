const Btns = document.querySelectorAll(".BTN button");
//Score
let Scores = 0;
//To Append
const ScoredPlayer = document.querySelector(".Scores");
const ScoredPlayer1 = document.querySelector(".Scores1");
const ComputerAppend = document.querySelector(".Computer");
const PlayerAppend = document.querySelector(".Player");

//CreateElements
const createImage = document.createElement("img");
const createImage1 = document.createElement("img");
const createElemets1 = document.createElement("h1");
const createElemets2 = document.createElement("h4");
//Fetch The Json
const Connection = async() =>{
try{
    const data = await fetch("RPS.json");
    const Json = await data.json();
   Functions(Json);
}catch(error){
console.log(error);
}

}

//DatasRetrive
const Functions = (Data) =>{

    Btns.forEach((button,index)=>{
 button.addEventListener("click",()=>{
   
//For Computer
const computers = Math.floor(Math.random()* Data.length);
const Retrive = Data[computers];

createImage.setAttribute("src",`${Retrive.image}`);
createImage.setAttribute("class","imgs")
ComputerAppend.appendChild(createImage);

const player = Data[index];
//For Player
switch(index){

    case 0:
        createImage1.setAttribute("src",`${Data[0].image}`);
        createImage1.setAttribute("class","imgs");
        PlayerAppend.appendChild(createImage1);
    break;

    case 1:
        createImage1.setAttribute("src",`${Data[1].image}`);
        createImage1.setAttribute("class","imgs");
        PlayerAppend.appendChild(createImage1);
     break;

     case 2:
        createImage1.setAttribute("src",`${Data[2].image}`);
        createImage1.setAttribute("class","imgs");
        PlayerAppend.appendChild(createImage1);
     break;

}

WinnersandLosers(player,Retrive)

 })
      
    })

}

const WinnersandLosers = (Datas,Retrive) =>{

    const player = Datas;
    const computer = Retrive;

    const Compapers = computer.name === "Paper";
const ComRock = computer.name === "Rock";
const ComScissor = computer.name === "Scissor";

const Playpapers = player.name === "Paper";
const PlayRock = player.name === "Rock";
const PlayScissor = player.name === "Scissor";


    //To Tie
if(player.name === computer.name){
    createElemets1.textContent = "Draw"
}else if((Playpapers && ComRock) || (PlayRock && ComScissor)|| (PlayScissor && Compapers)){
    createElemets1.textContent = "Player Wins"
    if(Scores >= 0){
        Scores += 1
    }
     if(Scores < 0){
         Scores = 0;
    }
    
}else{
    createElemets1.textContent = "Computer Wins"
    if(Scores >= 0){
        Scores -= 1
    }
     if(Scores < 0){
        Scores = 0;
   }
}

ScoredPlayer.appendChild(createElemets1)
createElemets2.textContent = Scores;
ScoredPlayer1.appendChild(createElemets2);


}



//
Connection()