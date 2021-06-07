let defaultRandomNumber=Math.floor(Math.random()*99+1);
const defaultMessage=document.querySelector('.message').textContent;
//console.log(defaultRandomNumber);

let actualScore=100;
let highScore=0;

document.querySelector('.check').addEventListener('click', function() {
    let guess=Number(document.querySelector('.guess').value);

    //input invalid
    if(!guess||(guess<0||guess>100)){
        document.querySelector('.message').textContent='⛔ Invalid Input!';}

        //input bun
        else{

            document.querySelector('.message').textContent=defaultMessage;
            //daca a ghicit numarul
            if(guess===defaultRandomNumber){
            document.querySelector('.message').textContent='🎉Congratulations';
            document.querySelector('.number').textContent=defaultRandomNumber;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width = '30rem';
            
            if(actualScore>highScore){
                        highScore=actualScore;
                        document.querySelector('.highscore').textContent=String(highScore);}
            return 1;
            }
                //daca nu a ghicit numarul
                //daca inca nu a pierdut
                else if(actualScore>0){ 
                    actualScore--;
                    document.querySelector('.score').textContent=actualScore;
                    //daca a pierdut fix runda asta
                    if(actualScore==0){
                        document.querySelector('.message').textContent='💥Lost game!';
                        document.querySelector('body').style.backgroundColor='#FF6347';
                        document.querySelector('.number').textContent=defaultRandomNumber;
                        document.querySelector('.number').style.width = '30rem';
                        
                        if(actualScore>highScore){
                            highScore=actualScore;
                            document.querySelector('.highscore').textContent=highScore;}
                    }
                        //daca a introdus un numar mai mic decat cel cautat
                        else if(guess<defaultRandomNumber)
                            document.querySelector('.message').textContent='↙ Too low!';
                            else//daca a introdus un numar mai mare decat cel cautat
                                 document.querySelector('.message').textContent='↗ Too high!';
                    }
                    else{
                        document.querySelector('.message').textContent='💥Lost game!';
                        document.querySelector('body').style.backgroundColor='FF6347';
                        document.querySelector('.number').textContent=defaultRandomNumber;
                        document.querySelector('.number').style.width = '30rem';
                    }
            } 

})

document.addEventListener('keydown', function(e) {
    
    //console.log(e);
    if(e.key==='Enter'){

    let guess=Number(document.querySelector('.guess').value);

    //input invalid
    if(!guess||(guess<0||guess>100)){
        document.querySelector('.message').textContent='⛔ Invalid Input!';}

        //input bun
        else{

            document.querySelector('.message').textContent=defaultMessage;
            //daca a ghicit numarul
            if(guess===defaultRandomNumber){
            document.querySelector('.message').textContent='🎉Congratulations';
            document.querySelector('.number').textContent=defaultRandomNumber;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width = '30rem';
            
            if(actualScore>highScore){
                        highScore=actualScore;
                        document.querySelector('.highscore').textContent=String(highScore);}
            return 1;
            }
                //daca nu a ghicit numarul
                //daca inca nu a pierdut
                else if(actualScore>0){ 
                    actualScore--;
                    document.querySelector('.score').textContent=actualScore;
                    //daca a pierdut fix runda asta
                    if(actualScore==0){
                        document.querySelector('.message').textContent='💥Lost game!';
                        document.querySelector('body').style.backgroundColor='#FF6347';
                        document.querySelector('.number').textContent=defaultRandomNumber;
                        document.querySelector('.number').style.width = '30rem';
                        
                        if(actualScore>highScore){
                            highScore=actualScore;
                            document.querySelector('.highscore').textContent=highScore;}
                    }
                        //daca a introdus un numar mai mic decat cel cautat
                        else if(guess<defaultRandomNumber)
                            document.querySelector('.message').textContent='↙ Too low!';
                            else//daca a introdus un numar mai mare decat cel cautat
                                 document.querySelector('.message').textContent='↗ Too high!';
                    }
                    else{
                        document.querySelector('.message').textContent='💥Lost game!';
                        document.querySelector('body').style.backgroundColor='FF6347';
                        document.querySelector('.number').textContent=defaultRandomNumber;
                        document.querySelector('.number').style.width = '30rem';
                    }
            } 

}})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent=defaultMessage;
    document.querySelector('body').style.backgroundColor='#333333';
    document.querySelector('.score').textContent='100';
    document.querySelector('.guess').value='';
    actualScore=100;
    defaultRandomNumber=Math.floor(Math.random()*99+1);
    console.log(defaultRandomNumber);
})
