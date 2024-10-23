import styles from "./Button.module.scss";

interface IProps {
  children: React.ReactNode;
  variant?: "squared" | "rounded";
  color?: 'purple' | 'pink' | 'disabled',
  fullwidth?: boolean
}

export default function Button({ children, variant = 'squared', color = 'disabled', fullwidth = false }: IProps) {
  return (
    <button
      className={`${styles.Button}
      ${
        variant === "rounded" ? styles.ButtonRounded : styles.ButtonSquared
      }
      ${ color === 'purple' ? styles.BtPurple : '' }
      ${ color === 'pink' ? styles.BtPink : '' }
      ${ color === 'disabled' ? styles.BtDisabled : '' }
      ${ fullwidth === true ? styles.BtFullWidth : '' }
      `}
    >
      {children}
    </button>
  );
}
