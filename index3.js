let num = function(){
    return Math.floor(Math.random()*9)
}

let btn = document.querySelector('#startBtn');
let choice =document.querySelectorAll('.bars .outer');
let score =document.querySelector('#score');
let ScoreCard =document.querySelector(".scoreCard");
let TotalScore =document.querySelector(".scoreCard p");
let total=0;
let count =6
let timeOut =120000;
let countdown =document.querySelector("#countdown");
let startAgainBtn =document.querySelector('.start-again');
let backBtn =document.querySelector('.back')

let lvl=9;




btn.addEventListener("click",function(){
    if(count<=0){
        return;
    }
    else{
        let start=setInterval((timer)=>{
            countdown.classList.add("countdown1");
            if(count>0){
                countdown.innerHTML=`${--count}`;
            }
            else{
                return;
            }
        },1000)
        setTimeout(()=>{
            clearInterval(start);
            countdown.classList.remove("countdown1");
            let game = setInterval(function(){
            
                let i=num();
                choice[i].classList.add("one");
                choice[i].addEventListener("click",function(){
                   
                    if(choice[i].style.marginTop < "2rem" ){
                        calcTotal();
                        choice[i].classList.add("disapper");
                        score.innerHTML=`Points : <b>${total}/${lvl}</b>`;
                    };
                    
                });
                setTimeout(()=>{
                    choice[i].classList.add("disapper");
                },1000)
                scoreCard();
               
            },1200)
            
            setTimeout(()=>{
                clearInterval(game);
            },timeOut)
        },6000)
    }
})


function calcTotal(){
    if(total<lvl){
        total++;
    }
    else{
        return 0;
    }
}

function scoreCard(){
    let a=0;
    for(let i=0; i<lvl;i++){
      if(choice[i].classList[1]=="one"){
        a++;
      }
      console.log(a)
      
    }
    if(a==9){
       setTimeout(function(){
        TotalScore.innerHTML=`${total}`;
        ScoreCard.style.display="flex";
        
        timeOut=0;
       },3000) 
    }
}


startAgainBtn.addEventListener('click',function(){
    location.reload();
})
backBtn.addEventListener('click',function(){
    window.open('./index.html',"_self");
})
