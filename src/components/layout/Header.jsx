import { NavLink } from "react-router-dom";
import styles from "../../assets/style/header.module.css";
import utilityStyles from "../../assets/style/utilities.module.css";

function Header() {
  return (
    <header id={styles["header"]}>
      <nav className={`${utilityStyles.wrapper}`}>
        <h1 className={styles.title}>
          <NavLink to={"/"}>
            <img
              className={styles.logo}
              src="/img/logo.png"
              alt="Wealth Health Logo"
            />
            <span>HRnet</span>
          </NavLink>
        </h1>
        <div>
          <NavLink to={"/employees"}>Employees List</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
