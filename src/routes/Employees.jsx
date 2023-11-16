import { useSelector } from "react-redux";
import styles from "../assets/style/employees-list.module.css";
import utilityStyles from "../assets/style/utilities.module.css";
import Datatable from "../components/datatable/Datatable.jsx";

function Employees() {
  const list = useSelector((state) => state.employees.list);

  return (
    <section id={styles["employees-list"]}>
      <div className={`${utilityStyles.wrapper}`}>
        <h2>Current Employees</h2>
        <Datatable data={list} />
      </div>
    </section>
  );
}

export default Employees;
