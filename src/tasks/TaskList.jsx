import TaskItem from './TaskItem.jsx'
import { useTasks } from './TasksContext.jsx'

export default function TaskList(){
  const tasks = useTasks()
  if (!tasks.length) {
    return <p>No tasks yet. Add your first one!</p>
  }
  return (
    <ul>
      {tasks.map(t => <TaskItem key={t.id} task={t} />)}
    </ul>
  )
}
