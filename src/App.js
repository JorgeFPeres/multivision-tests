import React, { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState('')
  const [hasNumber, setHasNumber] = useState(false)
  const [prime, setPrime] = useState(false)

  function numeroPrime(num) {
    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        return false
      }
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPrime(numeroPrime(number))
    setHasNumber(true)
  }

  return (
    <main>
      <div className='glass'>
        <div className='left-container'>
          <h2>Insira um número:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                value={number}
                className='input-bar'
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <button className='btn' type='submit'>
              Verificar
            </button>
          </form>
        </div>
        <div className='results'>
          <h3> Resultado: </h3>
          <p>
            {hasNumber ? (prime ? `É primo ` : 'Não é um número primo') : '...'}
          </p>
        </div>
      </div>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </main>
  )
}

export default App
