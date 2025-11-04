import { useState } from 'react'
import { useTasksDispatch } from './TasksContext.jsx'

export default function AddTaskForm(){
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()

  function onSubmit(e){
    e.preventDefault()
    const value = text.trim()
    if(!value) return
    dispatch({ type: 'added', text: value })
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={e => setText(e.target.value)}
        aria-label="Task text"
      />
      <button type="submit">Add</button>
    </form>
  )
}
