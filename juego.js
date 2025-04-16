

console.log("Hola mundo");


function playGame (){

    let humanScore = 0;
    let computerScore = 0;

    function getHumanChoice (){
        const eleccion = prompt("Elige: piedra, papel o tijera");
        return eleccion.toLowerCase();
    }


    function getComputerChoice () {
        const aleatorio = Math.floor(Math.random() * 3);

        if (aleatorio === 0){
            return "piedra";
        } else if (aleatorio === 1){
            return "papel";
        } else {
            return "tijera";
        }
    }




    function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice){
                console.log("Empate!! los dos habéis elegido " + humanChoice);
            } else if (
                (humanChoice === "piedra" && computerChoice === "tijera") || 
                (humanChoice === "tijera" && computerChoice === "papel") || 
                (humanChoice === "papel" && computerChoice === "piedra")

            ){
            console.log("Ganaste, enhorabuena!! "+ humanChoice + " le gana a " + computerChoice);
            humanScore++;
            } else {
                console.log("Perdiste!! " + computerChoice + " le gana a " + humanChoice);
                computerScore++;
            }

            
            
        console.log("Marcador - Tú: " + humanScore + " | Computadora: " + computerScore);
        console.log("-------------------------------------");
    }


    for (let i = 1; i <=5; i++) {
        console.log("Ronda " +i);

    const human = getHumanChoice();
    const computer = getComputerChoice();

    console.log("Tu elección: " + human);
    console.log("Elección del computer: " + computer);

    playRound(human, computer);
    }

    console.log("Juego terminado!");
    if (humanScore > computerScore){
        console.log("Felicidades, te has proclamado campeon de piedra, papel o tijera!👏🏽");
    } else if (computerScore>humanScore){
        console.log("La suerte no te acompaña, has perdido...otra ronda? 😏");
    } else {
        console.log("Empate! ni para ti ni para mi😜");
    }
    }

    playGame();