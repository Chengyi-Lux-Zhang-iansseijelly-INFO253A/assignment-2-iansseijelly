function TaskItem({task, onCheck, onDelete}) {
  return (
    <li> 
      <input
        type="checkbox"
        className="circle"
        checked={task.completed}
        onChange={() => onCheck(task.id)}
      />

      <span>{task.text}</span>

      <button
        type="button"
        className="cross"
        onClick={() => onDelete(task.id)}
      >
        x
      </button>
    </li>
  )
}

export default TaskItem