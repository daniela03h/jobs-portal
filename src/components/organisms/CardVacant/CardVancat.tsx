import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import styles from "./CardVacant.module.scss";
import IconButtonContainer from "@/components/molecules/IconButtonContainer/IconButtonContainer";
import Text from "@/components/atoms/Text/Text";

interface IProps {
  id: string
  type: string
  title: string;
  description?: string;
  status?: string;
  company?: string
}

export default function CardVacant( {type, title, description, status, company, id}:IProps ) {
  return (
    <div className={styles.Card}>
      <div>
        <TitleSecondary>{title}</TitleSecondary>

        <div className={styles.InfoContainer}>
          <Text>{description}</Text>
          <Text>Estado: {status}</Text>
          <Text>Compañía: {company}</Text>
        </div>
      </div>
      
      <IconButtonContainer type={type} idCard={String(id)} />
    </div>
  );
}
