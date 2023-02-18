import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';

function App() {

    const [board, setBoard] = useState(Array(12).fill(null).map(el =>
        ({id: nanoid(), img: null, isOpen: false})
    ))

    const emodjy = ['🐬', '🦕', '🏄', '⛵️', '🌺', '🌴',] ;

    const emodjyBoard = () => {
        const newBoard = board.map(el => ({...el, img: null}))
            for (let i = 0; i < emodjy.length; i++){
                for (let j = 1; j <= 2; j++){
                    let ind;
                    do {
                        ind = Math.trunc(Math.random() * 12);
                    }
                    while (newBoard[ind].img !== null)
                        newBoard[ind].img = emodjy[i]
                }
            }
            setBoard(newBoard)
    }

    useEffect (() => {
        emodjyBoard()
    }, [])

    return (
        <div className="App">
            <Header/>
            <Board board={board} />
        </div>
    );
}

export default App;
