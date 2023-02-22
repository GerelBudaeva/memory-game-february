import Board from './components/Board';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

    const [board, setBoard] = useState(Array(12).fill(null)
        .map((el) => (
            {
                id: Math.random().toString(),
                img: null,
                isOpen: false
            }
            )))
    const [winner, setWinner] = useState(false);
    const [resultMove, setResultMove] = useState([]);

    const emodjy = ['🐠', '🦜', '🍄', '🎄', '🌻', '🫐 '];
    const [history, setHistory] = useState([]);

    const emodjyBoard = () => {
        const newBoard = board.map(el => ({...el, img: null, isOpen: false}))
        for (let i = 0; i < emodjy.length; i++) {
            for (let j = 1; j <= 2; j++) {
                let index;
                do {
                    index = Math.trunc(Math.random() * 12)
                }
                while (newBoard[index].img !== null)
                newBoard[index].img = emodjy[i]
            }
        }
        setBoard(newBoard)
    }

    useEffect(() => {
        emodjyBoard()
    }, [])

    const openCard = (id, img) => {
        const newBoard = board.map(el => el.id === id ? {...el, isOpen: true} : el)
        setBoard(newBoard)
        setHistory([...history, img])

    }

    const checkMove = () => {
        if (history.length % 2 === 0 && history[history.length - 1] !== history[history.length - 2]) {
            const newBoard = board.map(el => el.img === history[history.length - 1] || el.img === history[history.length - 2] ?
                {...el, isOpen: false} : el)
            setBoard(newBoard)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            checkMove()
        }, 700)
    }, [history])

    const calculateWiner = () => {
        const win = board.every(el => el.isOpen)
        setWinner(win)
        if (win) setResultMove([...resultMove, history.length / 2])
    }

    useEffect(() => {
        if (history.length % 2 === 0) {
            calculateWiner()
        }
    }, [history])

    const restart = () => {
        emodjyBoard()
        setHistory([])
        setWinner(false)
    }

    useEffect(() => {
        setTimeout(() => {
            restart()
        }, 5000)
    }, [resultMove])

    return (
        <div className="App">
            <h1>Memory game</h1>
            <Board
                board={board}
                openCard={openCard}
            />

            <br/>
            {winner && <h2 style={{color: 'green'}}>Congratulation! You won in {history.length / 2} moves.</h2>}
            <br/>
            {resultMove.length > 0 && <h2> Moves: {resultMove.map(el => <li key={el}>{el}</li>)} </h2>}
        </div>
    );
}

export default App;
