import styles from "./InputContiner.module.scss"
import Input from "@/components/atoms/Input/Input"
import Label from "@/components/atoms/Label/Label"

export default function InputContainer() {
  return (
    <div className={styles.Container}>
      <Label>Titulo</Label>
      <Input />
    </div>
  )
}
