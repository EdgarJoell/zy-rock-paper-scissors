import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [ results, setResults ] = useState<string | null>(null);
    const [ player, setPlayer] = useState<string>();
    const [ computer, setComputer ]  = useState<string>();

    useEffect(() => {
        if (player && computer) {
            if (player === computer) {
                setResults('tie');
            } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
                setResults('player wins');
            } else {
                setResults('computer wins');
            }
        }
    }, [player, computer])

    const handlePlayerChoice = (choice: string) => {
        setPlayer(choice);
        handleComputerChoice();
    }

    function handleComputerChoice() {
        const compChoice = Math.floor(Math.random() * 3);

        if (compChoice === 1) {
            setComputer("rock");
        } else if (compChoice === 2) {
            setComputer('paper');
        } else {
            setComputer('scissors');
        }
    }

    function handleRestart() {
        setComputer('');
        setPlayer('');
        setResults(null);
    }

  return (
    <div id="game-container">
        <h1>zy rock paper scissors</h1>
        <div>
            <h2>choose your option</h2>
            { results ? (
                <div id="choices">
                    <button disabled>rock</button>
                    <button disabled>paper</button>
                    <button disabled>scissors</button>
                </div>
            ) : (
                <div id="choices">
                    <button onClick={() => handlePlayerChoice("rock")}>rock</button>
                    <button onClick={() => handlePlayerChoice('paper')}>paper</button>
                    <button onClick={() => handlePlayerChoice('scissors')}>scissors</button>
                </div>
            )}
        </div>

        <div>
            <h2>your choice: { player }</h2>
            <h2>computers choice: { computer }</h2>
        </div>

         <div id='results'>
             <h2>results: { results }</h2>
             { results ? (
                 <button onClick={handleRestart}>play again</button>
             ) : null }
        </div>
    </div>
  )
}

export default App
