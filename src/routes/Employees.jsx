import styles from "../assets/style/employees-list.module.css";
import utilityStyles from "../assets/style/utilities.module.css";

function Employees() {
  return (
    <section id={styles["employees-list"]}>
      <div className={`${utilityStyles.wrapper}`}>
        <h2>Employees List</h2>
      </div>
    </section>
  );
}

export default Employees;
