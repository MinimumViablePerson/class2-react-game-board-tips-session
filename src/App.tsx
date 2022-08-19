import { useState } from 'react'
import './App.css'

function App () {
  const [board, setBoard] = useState([
    [
      { value: '👶', color: 'white', covered: true, clickCount: 0 },
      { value: '👶', color: 'black', covered: true, clickCount: 0 },
      { value: '👶', color: 'white', covered: true, clickCount: 0 },
      { value: '👶', color: 'black', covered: true, clickCount: 0 },
      { value: '👶', color: 'white', covered: true, clickCount: 0 }
    ],
    [
      { value: '', color: 'black', covered: true, clickCount: 0 },
      { value: '', color: 'white', covered: true, clickCount: 0 },
      { value: '', color: 'black', covered: true, clickCount: 0 },
      { value: '', color: 'white', covered: true, clickCount: 0 },
      { value: '', color: 'black', covered: true, clickCount: 0 }
    ],
    [
      { value: '', color: 'white', covered: true, clickCount: 0 },
      { value: '', color: 'black', covered: true, clickCount: 0 },
      { value: '', color: 'white', covered: true, clickCount: 0 },
      { value: '', color: 'black', covered: true, clickCount: 0 },
      { value: '', color: 'white', covered: true, clickCount: 0 }
    ],
    [
      { value: '', color: 'black', covered: true, clickCount: 0 },
      { value: '', color: 'white', covered: true, clickCount: 0 },
      { value: '', color: 'black', covered: true, clickCount: 0 },
      { value: '', color: 'white', covered: true, clickCount: 0 },
      { value: '', color: 'black', covered: true, clickCount: 0 }
    ],
    [
      { value: '🦄', color: 'white', covered: true, clickCount: 0 },
      { value: '🦄', color: 'black', covered: true, clickCount: 0 },
      { value: '🦄', color: 'white', covered: true, clickCount: 0 },
      { value: '🦄', color: 'black', covered: true, clickCount: 0 },
      { value: '🦄', color: 'white', covered: true, clickCount: 0 }
    ]
  ])

  function clickCell (rowIndex: number, cellIndex: number) {
    const boardCopy = structuredClone(board)
    boardCopy[rowIndex][cellIndex].covered = false

    boardCopy[rowIndex][cellIndex].clickCount++
    setBoard(boardCopy)
  }

  return (
    <div className='App'>
      <div className='board'>
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div
              onClick={() => {
                clickCell(rowIndex, cellIndex)
              }}
              className={`cell ${cell.color} ${cell.covered ? 'covered' : ''}`}
            >
              {cell.covered ? null : cell.value}
              {cell.clickCount}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
