import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTask.module.css';

import plusIcon from '../assets/icons/plus.svg';

interface NewTaskProps {
  addNewTask: (task: string) => void;
}

export function NewTask({ addNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState<string>('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskFormSubmit(event: FormEvent) {
    event.preventDefault();
    addNewTask(newTaskText);
    setNewTaskText('');
  }

  return (
    <div className={styles.content}>
      <form onSubmit={handleNewTaskFormSubmit}>
        <input
          value={newTaskText}
          onChange={handleNewTaskChange}
          placeholder='Adicione uma nova tarefa'
        />
        <button>
          Criar
          <img src={plusIcon} alt="criar" />
        </button>
      </form>
    </div>
  );
}