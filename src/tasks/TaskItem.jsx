import { useTasksDispatch } from './TasksContext.jsx'

export default function TaskItem({ task }){
  const dispatch = useTasksDispatch()

  return (
    <li className="task">
      <div className="task-left">
        <input
          id={`chk-${task.id}`}
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch({ type: 'toggled', id: task.id })}
        />
        <label htmlFor={`chk-${task.id}`}>
          <span className={['text', task.done ? 'done' : ''].join(' ')}>
            {task.text}
          </span>
        </label>
      </div>
      <div className="actions">
        <button
          className="icon toggle"
          onClick={() => dispatch({ type: 'toggled', id: task.id })}
          title="Toggle complete"
        >
          ✓
        </button>
        <button
          className="icon delete"
          onClick={() => dispatch({ type: 'deleted', id: task.id })}
          title="Delete task"
        >
          ✕
        </button>
      </div>
    </li>
  )
}
