import styles from "../../assets/style/footer.module.css";
import utilityStyles from "../../assets/style/utilities.module.css";

function Footer() {
  return (
    <footer id={styles["footer"]}>
      <div className={`${utilityStyles.wrapper}`}>
        <p>&copy; 2023 Wealth Health</p>
      </div>
    </footer>
  );
}

export default Footer;
