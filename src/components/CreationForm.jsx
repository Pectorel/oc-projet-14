import { useEffect, useRef } from "react";
import styles from "../assets/style/form.module.css";
import { states } from "../utilities/states.js";
import { useDispatch } from "react-redux";
import { add } from "../redux/employeeSlice.js";

function CreationForm({ className, formRef }) {
  const dispatch = useDispatch();

  const department = useRef(null);
  const state = useRef(null);
  const birthdate = useRef(null);
  const startdate = useRef(null);

  useEffect(() => {
    $(department.current).selectmenu();
    $(state.current)
      .selectmenu()
      .selectmenu("menuWidget")
      .addClass(styles["select-overflow"]);

    $(birthdate.current).datetimepicker({
      timepicker: false,
      format: "m/d/Y",
    });
    $(startdate.current).datetimepicker({
      timepicker: false,
      format: "m/d/Y",
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    let employee = {};

    for (let field of formData.entries()) {
      employee[field[0]] = field[1];
    }

    await dispatch(add(employee));
  };

  return (
    <form className={`${className}`} ref={formRef} onSubmit={handleSubmit}>
      <div className={`${styles["input-group"]}`}>
        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="first-name">
            First Name
          </label>
          <input
            className={styles["input-field"]}
            type="text"
            id="first-name"
            name="first-name"
            required
          />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="last-name">
            Last Name
          </label>
          <input
            className={styles["input-field"]}
            type="text"
            id="last-name"
            name="last-name"
            required
          />
        </div>
        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="date-of-birth">
            Date of Birth
          </label>
          <input
            className={styles["input-field"]}
            id="date-of-birth"
            type="text"
            name="date-of-birth"
            ref={birthdate}
            required
          />
        </div>
      </div>

      <fieldset className={`${styles.fieldset} ${styles["input-group"]}`}>
        <legend>Address</legend>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="street">
            Street
          </label>
          <input
            className={styles["input-field"]}
            id="street"
            type="text"
            name="street"
            required
          />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="city">
            City
          </label>
          <input
            className={styles["input-field"]}
            id="city"
            type="text"
            name="city"
            required
          />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="state">
            State
          </label>
          <select name="state" id="state" ref={state} required>
            {states.map((stat, index) => {
              return (
                <option value={stat.abbreviation} key={index}>
                  {stat.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="zip-code">
            Zip Code
          </label>
          <input
            className={styles["input-field"]}
            id="zip-code"
            type="text"
            name="zip-code"
            required
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
            name="start-date"
            ref={startdate}
            required
          />
        </div>

        <div className={`${styles["input-container"]}`}>
          <label className={styles.label} htmlFor="department">
            Department
          </label>
          <select name="department" id="department" ref={department} required>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default CreationForm;
