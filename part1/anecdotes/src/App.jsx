import React, { useState } from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // State to keep track of the selected anecdote index
  const [selected, setSelected] = useState(getRandomInt(0, anecdotes.length - 1));
  // State to keep track of the selected anecdote index
  const [selectedPoints, setSelectedPoints] = useState('has 0 votes');
  // State to keep track of votes for each anecdote
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  // State to keep track of the anecdote with the most votes
  const [mostVotes, setMostVotes] = useState(0);

  // Handler to get the next anecdote
  const handleNextAnecdote = () => {
    const randomIndex = getRandomInt(0, anecdotes.length - 1);
    setSelected(randomIndex);
    setSelectedPoints('has '+points[randomIndex]+' votes')
  };

  // Handler to vote for the current anecdote
  const handleVote = () => {
    const newPoints = points;
    newPoints[selected] += 1;
    setPoints(newPoints);
    setSelectedPoints('has '+newPoints[selected] +' votes')

    // Check if the current anecdote has the most votes
    if (newPoints[selected] > newPoints[mostVotes]) {
      setMostVotes(selected);
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{selectedPoints}</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {points[mostVotes]} votes</p>
    </div>
  );
};

export default App;
