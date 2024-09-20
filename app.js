let gameSeq=[];
let userSeq=[];

let btns=["Yellow","Red","Green","Purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();

       
    } 
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randClr=btns[randIdx];
    let randBtn=document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx){
//    let idx=level-1;
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }

    
   }else{
    h2.innerHTML=`<b style="color:red">Game Over!</b><br> <i>[Score : <b>${level}</b>]</i> <br><b style="color:green">Press any key to start Again</b>`;
    document.querySelector("body").style.backgroundColor="black";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },250); 
    reset();
   }
}

function btnPress(){
    //this is the button which was pressed
   let btn=this;
   userFlash(btn);

   userClr=btn.getAttribute("id");
   userSeq.push(userClr);
   
   checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

