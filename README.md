# React Reducer + Context Sample (React 19 + Vite)

This project demonstrates scaling state with **useReducer** + **Context** using **separate state and dispatch contexts** and small, focused components.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Start dev server
npm run dev

# 3) Open the printed local URL (typically http://localhost:5173)
```

## What to Explore
- `src/tasks/TasksContext.jsx` — reducer, provider and custom hooks
- `src/tasks/AddTaskForm.jsx` — dispatching an `added` action
- `src/tasks/TaskItem.jsx` — toggling and deleting items
- `src/tasks/TaskList.jsx` — reading state from context
- `src/App.jsx` — composition + Provider wiring

Have fun!
