import { createContext, useContext, useReducer } from 'react'

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [...tasks, { id: crypto.randomUUID(), text: action.text, done: false }]
    case 'toggled':
      return tasks.map(t => t.id === action.id ? { ...t, done: !t.done } : t)
    case 'deleted':
      return tasks.filter(t => t.id !== action.id)
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [
    { id: crypto.randomUUID(), text: 'Explore the codebase', done: false },
    { id: crypto.randomUUID(), text: 'Add a couple of tasks', done: false },
    { id: crypto.randomUUID(), text: 'Toggle and delete to test', done: false },
  ])

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks(){
  const ctx = useContext(TasksContext)
  if (ctx === null) throw new Error('useTasks must be used within <TasksProvider>')
  return ctx
}

export function useTasksDispatch(){
  const ctx = useContext(TasksDispatchContext)
  if (ctx === null) throw new Error('useTasksDispatch must be used within <TasksProvider>')
  return ctx
}
