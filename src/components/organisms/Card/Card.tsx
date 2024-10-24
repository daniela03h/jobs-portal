import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import styles from "./Card.module.scss";
import IconButtonContainer from "@/components/molecules/IconButtonContainer/IconButtonContainer";
import Text from "@/components/atoms/Text/Text";

interface IProps {
  type: string
}

export default function Card( {type}:IProps ) {
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
      
      <IconButtonContainer type={type}/>
    </div>
  );
}
