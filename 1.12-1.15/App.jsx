import { useState } from 'react'


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const AnecdoteRow = ({text}) => (
 <table>
  <tbody>
    <tr>
      <td><h2>{text}</h2></td>
    </tr>
  </tbody>
</table>
)

const MostVotedAnecdote = ({ anecdotes, votes }) => {
  if (!votes.some(v => v > 0)) {
    return <p>There are no votes yet.</p>;
  }

  const indexOfMaxVote = votes.indexOf(Math.max(...votes));
  return (
    <>
      <p>{anecdotes[indexOfMaxVote]}</p>
      <p>Has {votes[indexOfMaxVote]} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex); 
  };

    // Función para votar por la anécdota actual
  const handleVote = () => {
    const copy = [...votes]; // crear copia del array
    copy[selected] += 1;     // incrementar el voto de la anécdota actual
    setVotes(copy);          // actualizar el estado con la copia
  };

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteRow text={anecdotes[selected]} />
      <p>Has {votes[selected]} votes</p>
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleNextAnecdote} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App