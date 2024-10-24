import styles from "./TextAreaContiner.module.scss"
import Label from "@/components/atoms/Label/Label"
import TextArea from "@/components/atoms/TextArea/TextArea"

interface IProps {
  label: string
}

export default function TextAreaContainer({ label }: IProps) {
  return (
    <div className={styles.Container}>
      <Label>{label}</Label>
      <TextArea />
    </div>
  )
}
