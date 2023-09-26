import styles from './CustomCheckbox.module.css';

interface CustomCheckboxProps {
  id: number;
  checked: boolean;
  toggleTask: (id: number) => void;
}

export function CustomCheckbox({ id, checked, toggleTask }: CustomCheckboxProps) {

  return (
    <div className={styles.container}>
      <input
        type='checkbox'
        checked={checked}
        className={checked ? styles.checked : styles.unchecked}
        onClick={() => toggleTask(id)}
        readOnly
      />
    </div>
  );
}