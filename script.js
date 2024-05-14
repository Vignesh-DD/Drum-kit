
document.addEventListener("keydown",function(event){
    var dbtn=event.key;
    playSound(dbtn);
    btnanimation(dbtn);
});
var dre=document.querySelectorAll(".drum").length;
for(var i=0;i<dre;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                
        var drumbutton =this.innerHTML;
        playSound(drumbutton);
        btnanimation(drumbutton);
     
     });
}
function playSound(event){
    switch (event) {
        case 'w':
            var tom1=new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            var tom3=new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case 's':
            var snare=new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case 'd':
            var kickBass=new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;

        case 'j':
            var crash=new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case 'k':
            var tom4=new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'l':
            var tom2=new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
    
        default:
            console.log("Please do valid clicks.........")
            break;
    }
}
function btnanimation(key){

    var activeKey=document.querySelector("."+key);
    activeKey.classList.add("btnpressed");

    setTimeout(function(){
        activeKey.classList.remove("btnpressed"); 

    },100)
}
