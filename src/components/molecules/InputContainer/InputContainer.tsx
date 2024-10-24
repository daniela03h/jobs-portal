import styles from "./InputContiner.module.scss"
import Input from "@/components/atoms/Input/Input"
import Label from "@/components/atoms/Label/Label"

interface IProps {
  label: string
}


export default function InputContainer({ label }: IProps) {
  return (
    <div className={styles.Container}>
      <Label>{label}</Label>
      <Input />
    </div>
  )
}
