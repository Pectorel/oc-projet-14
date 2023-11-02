import styles from "../assets/style/index.module.css";
import utilityStyles from "../assets/style/utilities.module.css";
import CreationForm from "../components/CreationForm.jsx";

function Index() {
  return (
    <section id={styles["index"]}>
      <div className={`${utilityStyles.wrapper} ${styles.content}`}>
        <header>
          <h2>Create Employee</h2>

          <button className={styles.btn}>Save</button>
        </header>
        <CreationForm className={styles.form} />
      </div>
      <div id="confirmation" className={`${styles.modal}`}>
        Employee Created!
      </div>
    </section>
  );
}

export default Index;
