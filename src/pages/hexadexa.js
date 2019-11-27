import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"

// Bugs to fix:

// Click too fast and the state doesn't update
// Timer state update rerenders the whole app

const randHEX = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

const draw = () => {
  const values = Array(4).fill(null).map(() => randHEX())

  return {
    values,
    answer: values[Math.floor(Math.random() * values.length)]
  }
}

const STATUS = {
  START: 'start',
  GAME: 'game',
  SCORE: 'score'
}

const CONFIG = {
  TIME: 30
}

const Game = ({ scoreIncrease, timeDecrease }) => {
  const [current, setCurrent] = useState(draw())

  const handleClick = (value) => {
    if (value === current.answer) {
      console.log('acerto mizeravi', current.answer, value)
      scoreIncrease()
    } else {
      console.log('errrrrrrou', current.answer, value)
      timeDecrease()
    }
  }

  return (
    <>
      {console.log(current)}
      {current.values.map((value, index) => (
        <div key={index} onClick={() => handleClick(value)}>
          {value}
        </div>
      ))}
    </>
  )
}

const Hexadexa = () => {
  const [status, setStatus] = useState(STATUS.GAME)
  const [time, setTime] = useState(CONFIG.TIME)
  const [score, setScore] = useState(0)

  // useEffect(() => {
  //   if (status === STATUS.GAME) {
  //     const timer = setInterval(() => {
  //       setTime(time => time - 1)
  //     }, 500)
  //     return () => clearTimeout(timer);
  //   }
  // }, [status])

  // useEffect(() => {
  //   if (time < 1) {
  //     setStatus(STATUS.SCORE)
  //   }
  // }, [time])

  return (
    <Layout title="Hexadexa">
      {(status === STATUS.START) && (
        <>
          <h1>Bem vindo ao Hexadexa!</h1>
          <p>Você tem {CONFIG.TIME} segundos para acertar o maior número possível de cores.</p>
          <p>Elas estarão em hexadecimal então é melhor você ter lido <a href="#">esse texto.</a></p>
          <p>Cada acerto vale um ponto, cada erro te custa 2 segundos.</p>
          <button onClick={() => setStatus(STATUS.GAME)}>Começar!</button>
        </>
      )}

      {(status === STATUS.GAME) && (
        <>
          <div>
            Tempo restante: {time} | Pontos: {score}
          </div>
          <Game
            scoreIncrease={() => setScore(score => score + 1)}
            timeDecrease={() => setTime(time => time - 2)}
          />
        </>
      )}

      {(status === STATUS.SCORE) && (
        <>
          Parabéns, você fez {score} pontos.
          <button onClick={() => {
            setTime(CONFIG.TIME)
            setStatus(STATUS.START)
          }}>Voltar</button>
        </>
      )}
    </Layout>
  )

}

export default Hexadexa