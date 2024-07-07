import React from 'react'
import Square from '../Square/Square';
import "./board.css"
import Keyboard from '../Keyboard/Keyboard';

interface IProps {
    board: string[];
}

const Board:React.FC<IProps> = (props) => {
    const { board } = props
  return (
    <>
        <div className='board'>
            {board.map((square, idx)=> {
                return (
                    <>
                        <Square val={square} squareIdx={idx}/>
                    </>
                )
            })}
        </div>
        <div className="keyboard">
            <Keyboard />
        </div>
    </>
  )
}

export default Board