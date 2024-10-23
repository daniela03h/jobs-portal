import Text from "@/components/atoms/Text/Text"
import styles from "./InfoContainer.module.scss"

export default function InfoContainer() {
  return (
    <div className={styles.InfoContainer}>
      <Text>Se busca desarrollador con experiencia en react</Text>
      <Text>Estado: Open</Text>
      <Text>Compania: TechCorp</Text>
    </div>
  )
}
