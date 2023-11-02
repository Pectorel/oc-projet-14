import { Form } from "react-router-dom";
import styles from "../assets/style/form.module.css";

function CreationForm({ className }) {
  return (
    <Form className={`${className}`} method="post" action="/">
      <div className={`${styles["input-group"]}`}>
        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="first-name">
            First Name
          </label>
          <input
            className={styles["input-field"]}
            type="text"
            id="first-name"
          />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="last-name">
            Last Name
          </label>
          <input className={styles["input-field"]} type="text" id="last-name" />
        </div>
        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="date-of-birth">
            Date of Birth
          </label>
          <input
            className={styles["input-field"]}
            id="date-of-birth"
            type="text"
          />
        </div>
      </div>

      <fieldset className={`${styles.fieldset} ${styles["input-group"]}`}>
        <legend>Address</legend>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="street">
            Street
          </label>
          <input className={styles["input-field"]} id="street" type="text" />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="city">
            City
          </label>
          <input className={styles["input-field"]} id="city" type="text" />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="state">
            State
          </label>
          <select name="state" id="state"></select>
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="zip-code">
            Zip Code
          </label>
          <input
            className={styles["input-field"]}
            id="zip-code"
            type="number"
          />
        </div>
      </fieldset>

      <div className={`${styles["input-group"]}`}>
        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="start-date">
            Start Date
          </label>
          <input
            className={styles["input-field"]}
            id="start-date"
            type="text"
          />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="department">
            Department
          </label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </div>
    </Form>
  );
}

export default CreationForm;
