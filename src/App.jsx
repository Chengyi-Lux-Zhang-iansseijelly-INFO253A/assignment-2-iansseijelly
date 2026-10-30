import './App.css'

import { useState } from 'react'

import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter'
import TaskForm from './components/TaskForm'
// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 className): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 className): useState, the controlled form, toggle, delete, filtering.
function App() {
  
  const initialTasks = [
    { id: 1, text: "Call Mom", completed: false },
    { id: 2, text: "Buy the new issue of Scientific American", completed: false },
    { id: 3, text: "Return the textbook to Josie", completed: false },
    { id: 4, text: "Buy the new album by Rake", completed: false },
    { id: 5, text: "Buy a gift card for Dad", completed: false },
  ]
  const [tasks, setTasks] = useState(initialTasks)

  const [filter, setFilter] = useState('All')
  const visibleTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true // All
  })

  function handleAddTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
  
    setTasks(previousTasks => [...previousTasks, newTask])
  }

  function handleCheck(id) {
    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function handleDelete(id) {
    setTasks(previousTasks =>
      previousTasks.filter(task => task.id !== id)
    )
  }

  return (
  <div className='app'>
    <header className="site-header">
      <img src={menuIcon} alt="Menu" />
      <div className="search-box">
        <img src={searchIcon} alt="Search" /> <input type="text" placeholder="Quick Find" />
      </div>
      <div className="iampadding"></div>
      <div className="task-counter">
        <img src={checkIcon} alt="Check" /> <TaskCounter total={tasks.length} completed={tasks.filter(t=>t.completed==true).length} />
      </div>
    </header>

    <div className="container-wrapper">
      <nav className="nav" aria-label="Main navigation">
        <ul className="nav-list">
        <li>
          <a href="#"> <img src={inboxIcon} alt="Inbox" /> Inbox <span className="count">5</span></a>
        </li>
        <li>
          <a href="#"> <img src={calendarIcon} alt="Today" /> Today <span className="count">5</span></a>
        </li>
        <li> 
          <a href="#"> <img src={upcomingIcon} alt="Upcoming" /> Upcoming </a>
        </li>
        </ul>
      </nav>

      <main className="container">
        <h1>Inbox </h1> 
        <div className="task-filters">
          {['All', 'Active', 'Completed'].map((name, index) => (
            <span key={name}>
              {index > 0 && ' | '}
              <button
                type="button"
                className={filter === name ? 'selected' : ''}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            </span>
          ))}
        </div>
        <TaskForm onAdd={handleAddTask}/>
        <TaskList tasks={visibleTasks} onCheck={handleCheck} onDelete={handleDelete} />
      </main>
    </div>
  </div>
  )
}

export default App
