import AddTaskForm from './tasks/AddTaskForm.jsx'
import TaskList from './tasks/TaskList.jsx'
import { TasksProvider } from './tasks/TasksContext.jsx'

export default function App() {
  return (
    <TasksProvider>
      <div className="app">
        <header className="header">
          <h1>Task Manager</h1>
          <p className="subtitle">Reducer + Context • No prop drilling</p>
        </header>

        <section className="card">
          <AddTaskForm />
        </section>

        <section className="card">
          <TaskList />
        </section>

        <footer className="footer">
          <small>React 19 • Vite • Context + useReducer</small>
        </footer>
      </div>
    </TasksProvider>
  )
}
