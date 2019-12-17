import React, { useState, useEffect } from "react"
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Layout from "../layouts/Main"
import Button from "../components/Button/Button"

const STATUS = {
  START: 'start',
  GAME: 'game',
  SCORE: 'score'
}

const CONFIG = {
  TIME: 60,
  COLORS: 3,
  PENALTY: 2
}

const SCORE_MESSAGES = [
  'Faltou esforço aí namoral...',
  'Um é melhor do que nenhum.',
  'Você sabia que jacaré não tem pescoço?',
  'Uau, três pontos!',
  'Você acertou quatro cores, qual o seu segredo?',
  'Nada mal, você é quase um profissional!'
]

const randHEX = () => "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16))

const draw = () => {
  const values = Array(CONFIG.COLORS).fill(null).map(() => randHEX())

  return {
    values,
    answer: values[Math.floor(Math.random() * values.length)]
  }
}

const CurrentColor = styled.div`
  width: 100%;
  padding-bottom: 50%;
  border-radius: 4px;
  transition: background-color .3s ease;
  ${({ background }) => background && css`
    background-color: ${background};
  `}
`

const Choices = styled.div`
  display: flex;
`

const ChoicesColor = styled.div`
  flex: 1;
  padding: 20px 0;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: transform .3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`

const Info = styled.div`
  display: flex;
  font-size: 20px;
  margin: 20px 0;
`

const InfoItem = styled.div`
  flex: 1;
  display: flex;
`

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
    setCurrent(draw())
  }

  return (
    <>
      <Choices>
        {current.values.map((value, index) => (
          <ChoicesColor
            key={index}
            onClick={() => handleClick(value)}
          >
            {value}
          </ChoicesColor>
        ))}
      </Choices>
      <CurrentColor background={current.answer} />
    </>
  )
}

const Hexadexa = () => {
  const [status, setStatus] = useState(STATUS.START)
  const [time, setTime] = useState(CONFIG.TIME)
  const [score, setScore] = useState(0)
  const [newPlayer, setNewPlayer] = useState(true)

  const cleanUp = () => {
    setStatus(STATUS.START)
    setTime(CONFIG.TIME)
    setScore(0)
    setNewPlayer(false)
  }

  useEffect(() => {
    if (status === STATUS.GAME) {
      const timer = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)
      return () => clearTimeout(timer);
    }
  }, [status])

  useEffect(() => {
    if (time < 1) {
      setStatus(STATUS.SCORE)
    }
  }, [time])

  return (
    <Layout title="Hexadexa">
      <div>
        {(status === STATUS.START) && (
          <div>
            <h1>Bem vindo {newPlayer ? '' : 'de volta'} ao Hexadexa</h1>
            <p>O jogo de acertar cores para toda a familia!</p>
            <h2>Como jogar</h2>
            <p>Será exibida uma cor aleatória e você terá que escolher uma entre {CONFIG.COLORS} disponíveis. Como as alternativas estarão em hexadecimal é melhor você ter lido <a href="/como-ler-cores-em-hexadecimal/" target="_blank">esse texto.</a></p>
            <p>Pra dar uma EMOÇÃO, você só tem {CONFIG.TIME} segundos para acertar o maior número possível. Senão fica muito fácil né?</p>
            <p>Cada acerto vale 1 ponto e cada erro vai te custar {CONFIG.PENALTY} segundos.</p>
            <Button onClick={() => setStatus(STATUS.GAME)}>
              Clique aqui para começar
            </Button>
          </div>
        )}

        {(status === STATUS.GAME) && (
          <div>
            <Info>
              <InfoItem>
                <div>Tempo:</div>
                <div>{time}</div>
              </InfoItem>
              <InfoItem>
                <div>Pontos:</div>
                <div>{score}</div>
              </InfoItem>
            </Info>
            <Game
              scoreIncrease={() => setScore(score => score + 1)}
              timeDecrease={() => setTime(time => time - CONFIG.PENALTY)}
            />
          </div>
        )}

        {(status === STATUS.SCORE) && (
          <div>
            <h1>Você fez {score} {score === 1 ? 'ponto' : 'pontos'} no Hexadexa.</h1>
            <h2>
              {SCORE_MESSAGES[score] || 'Você fez tantos pontos que eu desisti de escrever uma mensagem customizada, parabéns! Tente jogar pior da próxima vez.'}
            </h2>
            <Button onClick={cleanUp}>
              {score === 2 ? 'Que porra de mensagem é essa?' : 'Jogar de novo'}
            </Button>
            <Link to="/" style={{ marginLeft: '15px' }}>
              <Button secondary>Voltar para home</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Hexadexa