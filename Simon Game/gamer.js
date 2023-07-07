let buttonColours = ["red" , "green" , "blue" , "yellow" ];
let userClickedPattern = [] ; 
let gamePattern = [] ;
let isGameStarted = false ;
let count = 0 ; 
function playSound(name){
    let beat = new Audio(`./sounds/${name}.mp3`);
    beat.play();
}
function lalit(){
    let randomNumber = Math.floor(Math.random() * 4) ;
    gamePattern.push(buttonColours[randomNumber]) ;
    color = buttonColours[randomNumber]
    playSound(color)
    $(`#${color}`).fadeOut(100).fadeIn(100);
    $('h1').text( `Level ${gamePattern.length}`)
    count = 0;
}
function nextSequence(){
    setTimeout(lalit,700);
}


$(".btn").click(function(event){
    playSound(event.target.id); 
    userClickedPattern.push(event.target.id);
    $(`#${event.target.id}`).addClass("pressed");
    setTimeout(function(){
        $(`#${event.target.id}`).removeClass("pressed");
    },100)

    if(!checkPatter())
    {
        isGameStarted = false  ;
        return;
    } 
    if(gamePattern.length === userClickedPattern.length)
    {
        userClickedPattern= [] ;
        nextSequence();
    }

})

function checkPatter(){
    if(gamePattern[count] != userClickedPattern[count])
    {
        playSound("wrong");
        $('h1').text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");

        },200)
        userClickedPattern = [] ; 
        gamePattern = [] ;
        return false
    }
    count++;
    return true;




}


function startGame(){
    if(isGameStarted === false)
    {
        isGameStarted = true ;
        lalit() ;
    }
}