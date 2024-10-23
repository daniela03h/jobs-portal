import styles from "./SelectContiner.module.scss"
import Label from "@/components/atoms/Label/Label"
import Select from "@/components/atoms/Select/Select"

export default function SelectContainer() {
  return (
    <div className={styles.Container}>
      <Label>Estado</Label>
      <Select />
    </div>
  )
}
