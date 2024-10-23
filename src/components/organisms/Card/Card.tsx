import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import styles from "./Card.module.scss";
import InfoContainer from "@/components/molecules/InfoContainer/InfoContainer";
import IconButtonContainer from "@/components/molecules/IconButtonContainer/IconButtonContainer";
import Text from "@/components/atoms/Text/Text";

export default function Card() {
  return (
    <div className={styles.Card}>
      <div>
        <TitleSecondary>Desarrollador Frontend</TitleSecondary>

        <InfoContainer>
          <Text>Se busca desarrollador con experiencia en react</Text>
          <Text>Estado: Open</Text>
          <Text>Compania: TechCorp</Text>
        </InfoContainer>
      </div>
      
      <IconButtonContainer />
    </div>
  );
}
