import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import styles from "./Card.module.scss";
import InfoContainer from "@/components/molecules/InfoContainer/InfoContainer";

export default function Card() {
  return (
    <div className={styles.Card} >
      <TitleSecondary>Desarrollador Frontend</TitleSecondary>
      <InfoContainer></InfoContainer>
    </div>
  )
}
