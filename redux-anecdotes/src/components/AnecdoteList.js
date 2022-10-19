import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  // Must assign a new copy of state using spread operator
  const anecdotes = [...useSelector(({ anecdotes, filter }) => 
    filter
      ? anecdotes.filter(anecdote => anecdote.content.includes(filter))
      : anecdotes
  )]

  return (
    <>
      {anecdotes
        .sort((a, b) => a.votes > b.votes ? -1 : 1)
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => {
              dispatch(addVote(anecdote.id))
              dispatch(setNotification(`You voted "${anecdote.content}"`, 5))
            }}
          />
        )
      }
    </>
  )
}

export default AnecdoteList