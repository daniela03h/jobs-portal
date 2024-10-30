import styles from "./SelectContiner.module.scss"
import Label from "@/components/atoms/Label/Label"
import Select from "@/components/atoms/Select/Select"

export interface Option {
  value: string | number,
  label: string
}
interface IProps {
  label: string
  options: Option[]
}

export default function SelectContainer({ label, options = [] }: IProps) {
  return (
    <div className={styles.Container}>
      <Label>{label}</Label>
      <Select options={options} />
    </div>
  )
}
