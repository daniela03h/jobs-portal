import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import styles from "./Card.module.scss";
import IconButtonContainer from "@/components/molecules/IconButtonContainer/IconButtonContainer";
import Text from "@/components/atoms/Text/Text";

export default function Card() {
  return (
    <div className={styles.Card}>
      <div>
        <TitleSecondary>Desarrollador Frontend</TitleSecondary>

        <div className={styles.InfoContainer}>
          <Text>Se busca desarrollador con experiencia en react</Text>
          <Text>Estado: Open</Text>
          <Text>Compania: TechCorp</Text>
        </div>
      </div>
      
      <IconButtonContainer />
    </div>
  );
}
