import TitleSecondary from "@/components/atoms/TitleSecondary/TitleSecondary";
import styles from "./Card.module.scss";
import InfoContainer from "@/components/molecules/InfoContainer/InfoContainer";
import IconButtonContainer from "@/components/molecules/IconButtonContainer/IconButtonContainer";

export default function Card() {
  return (
    <div className={styles.Card}>
      <div>
        <TitleSecondary>Desarrollador Frontend</TitleSecondary>
        <InfoContainer />
      </div>
      <IconButtonContainer />
    </div>
  );
}
