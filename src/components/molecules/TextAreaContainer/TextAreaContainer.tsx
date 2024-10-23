import styles from "./TextAreaContiner.module.scss"
import Label from "@/components/atoms/Label/Label"
import TextArea from "@/components/atoms/TextArea/TextArea"

export default function TextAreaContainer() {
  return (
    <div className={styles.Container}>
      <Label>Descripcion</Label>
      <TextArea />
    </div>
  )
}
