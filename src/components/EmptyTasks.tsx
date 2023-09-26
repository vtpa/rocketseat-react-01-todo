import styles from './EmptyTasks.module.css';
import emptyIcon from '../assets/icons/empty.svg';

export function EmptyTasks() {

  return (
    <div className={styles.container}>
      <img src={emptyIcon} alt='Vazio' />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}