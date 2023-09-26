import { ITask } from '../App';
import styles from './Task.module.css';

import TrashIcon from '../assets/icons/trash.svg?react';
import { CustomCheckbox } from './CustomCheckbox';

interface TaskProps extends ITask {
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export function Task({ id, content, finished, deleteTask, toggleTask }: TaskProps) {

  return (
    <div key={id} className={styles.container}>
      <CustomCheckbox
        id={id}
        checked={finished}
        toggleTask={toggleTask}
      />
      <p
        className={finished ? styles.contentFinished : ''}
      >
        {content}
      </p>
      <a href='#' onClick={() => deleteTask(id)}>
        <TrashIcon />
      </a>
    </div>
  );
}