import { useSelector } from "react-redux";
import styles from "../assets/style/employees-list.module.css";
import utilityStyles from "../assets/style/utilities.module.css";
import Datatable from "react-datatable-light/Datatable";

function Employees() {
  const data = useSelector((state) => state.employees.list);

  return (
    <section id={styles["employees-list"]}>
      <div className={`${utilityStyles.wrapper} ${styles.content}`}>
        <header>
          <h2>Current Employees</h2>
        </header>
        <Datatable data={data} className={styles.datatable} />
      </div>
    </section>
  );
}

export default Employees;
