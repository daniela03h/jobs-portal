import styles from "./SelectContiner.module.scss"
import Label from "@/components/atoms/Label/Label"
import Select from "@/components/atoms/Select/Select"

interface IProps {
  label: string
  options: {
    value: string | number,
    label: string
  }[]
}

export default function SelectContainer({ label, options = [] }: IProps) {
  return (
    <div className={styles.Container}>
      <Label>{label}</Label>
      <Select options={options} />
    </div>
  )
}
