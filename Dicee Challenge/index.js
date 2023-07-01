function resultCalculate(){
    let player1 = Math.floor(Math.random() * 6) + 1;
    let player2 = Math.floor(Math.random() * 6) + 1;
    console.log(player1, player2);
    document.querySelector('#player1img').setAttribute('src', `./images/dice${player1}.png`);
    document.querySelector('#player2img').setAttribute('src', `./images/dice${player2}.png`);
    if(player1 > player2)
    {
        document.querySelector("#refresh").classList.add("none")
        document.querySelector("#player2win").classList.add("none")
        document.querySelector("#player1win").classList.remove("none")
    }else if(player1 < player2){
        document.querySelector("#refresh").classList.add("none")
        document.querySelector("#player1win").classList.add("none")
        document.querySelector("#player2win").classList.remove("none")

    }
    else{
        document.querySelector("#player2win").classList.add("none")
        document.querySelector("#player1win").classList.add("none")
        document.querySelector("#refresh").classList.remove("none")


    }
}