import { useState } from 'react'


const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
  )

  const StatisticLine = ({ text, value}) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

  const Statistics = ({ good, neutral, bad}) => {
    const total = good + neutral + bad;
     
    if(total === 0) {
      return <p>No feedback given</p>
    } 
    const totalScore = good * 1 + neutral * 0 + bad * -1;
    const average = totalScore / total;
    const positivePercentage = (good / total) * 100;

    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average.toFixed(2)} />
            <StatisticLine text="Positive" value={positivePercentage.toFixed(2) + " %"} />
          </tbody>
        </table>
      </div>
    );
  };

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("Botón 'good' clickeado. Valor actual:", good);
    setGood(good + 1);
};

 const handleNeutral = () => {
    console.log("Botón 'neutral' clickeado. Valor actual:", neutral);
    setNeutral(neutral + 1);
}

const handleBad = () => {
    console.log("Botón 'bad' clickeado. Valor actual:", bad);
    setBad(bad + 1);
}

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button 
      onClick ={handleGood} text="good"/>
      <Button 
      onClick ={handleNeutral} text="neutral" />
      <Button 
      onClick ={handleBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
    
  )
}

export default App