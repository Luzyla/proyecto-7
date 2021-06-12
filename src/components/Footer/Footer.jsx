import { GiHeartBottle } from "react-icons/gi";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <p className={styles.txtFooter}>
        Builded by 
        <a href="http://github.com/Luzyla" target="_blank">
          <span className={styles.mySignature}> @Luzyla </span>
        </a>
        with galons of <span className={styles.emojiMate}>🧉</span>& 
        <GiHeartBottle className={styles.iconHeart} />
      </p>
    </div>
  );
};

export default Footer;
