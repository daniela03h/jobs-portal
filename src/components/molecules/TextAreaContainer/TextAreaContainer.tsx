import styles from "./TextAreaContiner.module.scss";
import Label from "@/components/atoms/Label/Label";

interface IProps {
  label: string;
  children: React.ReactNode;
}

export default function TextAreaContainer({ label, children }: IProps) {
  return (
    <div className={styles.Container}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}
