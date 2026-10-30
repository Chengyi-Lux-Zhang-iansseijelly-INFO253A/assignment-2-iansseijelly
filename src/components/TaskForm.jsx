import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <button className="submitFormButton" type="submit">+</button>
      <input
        aria-label="New task"
        value={text}
        placeholder="Add a task…"
        onChange={event => setText(event.target.value)}
      />
    </form>
  )
}

export default TaskForm