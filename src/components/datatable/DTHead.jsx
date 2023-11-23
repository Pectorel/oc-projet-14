/**
 *
 * - TODO : ADD Sort ASC and DESC on each key (Add sort option to disable or enable it)
 *
 * */

import style from "../../assets/style/datatable.module.css";

function DTHead({ headRow = {}, options = { sort: true } }) {
  const changeSort = ({ target }) => {
    if (!options.sort) return false;
    let icon = target.querySelector(`.${style["sort-icon"]}`);
    let icons = document.querySelectorAll(`.${style["sort-icon"]}`);
    icons.forEach((cell) => {
      if (cell !== icon) cell.classList.remove(style["asc"], style["desc"]);
    });

    if (icon.classList.contains(style["asc"])) {
      icon.classList.remove(style["asc"]);
      icon.classList.add(style["desc"]);
    } else {
      icon.classList.remove(style["desc"]);
      icon.classList.add(style["asc"]);
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(headRow).length > 0
          ? Object.keys(headRow).map((key, index) => {
              key = key.replaceAll(new RegExp("-", "g"), " ");
              return (
                <td key={index} onClick={changeSort}>
                  {key}
                  {options.sort ? <i className={style["sort-icon"]}></i> : null}
                </td>
              );
            })
          : null}
      </tr>
    </thead>
  );
}
export default DTHead;
