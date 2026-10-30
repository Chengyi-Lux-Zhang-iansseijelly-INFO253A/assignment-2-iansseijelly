import TaskItem from './TaskItem.jsx'

function TaskList({ tasks, onCheck, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks to display.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList