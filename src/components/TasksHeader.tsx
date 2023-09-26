import styles from './TasksHeader.module.css';

interface TasksHeaderProps {
  createdTasks: number;
  completedTasks: number;
}

export function TasksHeader({ completedTasks, createdTasks }: TasksHeaderProps) {

  return (
    <div className={styles.content}>
      <p className={styles.created}>Tarefas Criadas<span>{createdTasks}</span></p>
      <p className={styles.finished}>Concluídas<span>{completedTasks} de {createdTasks}</span></p>
    </div>
  );
}