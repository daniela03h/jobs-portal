import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import styles from "./CardCompany.module.scss";
import IconButtonContainer from "@/components/molecules/IconButtonContainer/IconButtonContainer";
import Text from "@/components/atoms/Text/Text";

interface IProps {
  id: string
  type: string
  title: string
  location?: string
  contact?: string
}

export default function CardCompany( {type, title, location, contact, id}:IProps ) {
  
  return (
    <div className={styles.Card}>
      <div>
        <TitleSecondary>{title}</TitleSecondary>

        <div className={styles.InfoContainer}>
          <Text>{location}</Text>
          <Text>{contact}</Text>
        </div>
      </div>
      
      <IconButtonContainer type={type} idCard={id}  />
    </div>
  );
}
