import { useState } from 'react';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TasksHeader } from './components/TasksHeader';
import { EmptyTasks } from './components/EmptyTasks';

import './global.css'
import styles from './App.module.css';
import { TaskList } from './components/TaskList';

export interface ITask {
  id: number;
  content: string;
  finished: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addNewTask(task: string) {
    const newTask: ITask = {
      id: Math.random(),
      content: task,
      finished: false
    }
    setTasks(actual => [newTask, ...actual])
  }

  function deleteTask(id: number) {
    setTasks(actualTasks => actualTasks.filter(task => task.id !== id))
  }

  function toggleTask(id: number) {
    setTasks(actualTasks => actualTasks.map(task => task.id === id ? { ...task, finished: !task.finished } : task))
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <NewTask addNewTask={addNewTask} />
        <TasksHeader
          completedTasks={tasks.filter(task => task.finished).length}
          createdTasks={tasks.length}
        />
        {tasks.length < 1
          ?
          <EmptyTasks />
          :
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        }
      </div>
    </div>
  )
}
