import FormVacancie from "@/components/organisms/FormVacancie/FormVacancie";
import styles from "./FormModal.module.scss"
import FormCompanies from "@/components/organisms/FormCompanies/FormCompanies";


export default function FormModal() {
  return (
    <div className={styles.Container}>
      <FormVacancie />
      <FormCompanies />
    </div>
  )
}
