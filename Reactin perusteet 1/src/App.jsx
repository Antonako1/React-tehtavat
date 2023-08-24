import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const [mostVotes, setMostVotes] = useState(0)
  const [pos, setPos] = useState(0);

  const handleSelect = () => {
    let randomNumber = Math.floor((Math.random() * anecdotes.length) + 0);
    setSelected(randomNumber)
    mostVotesFunc();
  }

  const handleVote = () => {
    let copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    mostVotesFunc();
  }

  const mostVotesFunc = () => {
    let biggest = points[0];
    let posi = 0;

    for(let i = 0; i < points.length; i++){
      if(points[i] === 0){
        if(points[i] > biggest){
          biggest = points[i];
          posi = i;
        }
      }else{
        if(points[i] > biggest -1){
          biggest = points[i];
          posi = i;
        }
      }
    }
    setMostVotes(biggest);
    setPos(posi);
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} points!
      <br/>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelect}>next anecdote</button>

      <div>
        <h1>Anecdote with most votes is:</h1>
        <i>{anecdotes[pos]}</i>
        <p>With <b>{points[selected] === mostVotes + 1? points[selected] : mostVotes}</b> votes! </p>
      </div>
    </div>
  )
}

export default App
