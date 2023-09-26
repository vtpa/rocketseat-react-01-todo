import { ITask } from '../App';
import { Task } from './Task';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: ITask[];
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export function TaskList({ tasks, deleteTask, toggleTask }: TaskListProps) {

  return (
    <div className={styles.container}>
      {tasks.map(task => <Task
        key={task.id}
        {...task}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />)}
    </div>
  );
}