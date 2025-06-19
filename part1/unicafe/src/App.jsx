import { useState } from 'react'

const Button = ({ handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({ text, value}) => {

  return  <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
          
  
}

const Staticistcs = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good - bad ) / all
  const positive = (good / all) * 100

  if (all === 0) {
    return <div> 
              <h1>statistics </h1> 
              <p> No feedback given</p>
            </div>
  }

  return (
    
    <div>
      <h1> statistics</h1>
      <table>
        <tbody>

          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="avg" value ={avg} />
          <StatisticLine text="positive" value ={positive + '%'} />
        </tbody>
       
      </table>
    </div>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback</h1>
        <Button handleClick={() => setGood(good + 1) } text = 'good'  />
        <Button handleClick={() => setNeutral(neutral + 1)} text = 'neutral' />
        <Button handleClick={() => setBad(bad + 1)} text = 'bad' />
      
      <Staticistcs good = {good} neutral = {neutral} bad ={bad} />  

    </div>
  )
}

export default App