/**
 *
 * Objectives : Renders only visible Row at first to speed up the calculation
 * But Store all data for filtering purpose
 * By default sort by array index
 *
 *
 * Ideas :
 *  - Add item per page - DONE
 *  - Add default sort attribute
 *  - Try to render only new rows and keep the existing rows on pagination and filtering
 *
 */
import { useEffect, useState } from "react";
import DTRow from "./DTRow.jsx";
import style from "../../assets/style/datatable.module.css";

function Datatable({ data, className, options = { perPage: 10 } }) {
  const [page, setPage] = useState(() => {
    return 0;
  });

  const [maxPage, setMaxPage] = useState(() => {
    return 1;
  });

  useEffect(() => {
    // Calculating max pages
    let i = 1;
    let stop = false;

    do {
      if (data.length <= options.perPage * i) stop = true;
      else i++;
    } while (!stop);

    setMaxPage(i - 1);
  }, []);

  const getLastRowIndex = () => {
    let res = options.perPage * (page + 1);
    if (data.length < options.perPage * (page + 1)) res = data.length;
    return res;
  };

  const goToPage = (index) => {
    if (index > maxPage) {
      index = maxPage;
    } else if (index < 0) {
      index = 0;
    }
    setPage(index);
  };

  const getPagination = () => {
    const pages = [];
    for (let i = 0; i <= maxPage; i++) {
      pages.push(
        <button
          className={style["pagination-btn"]}
          onClick={() => goToPage(i)}
          disabled={page === i}
        >
          {i + 1}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className={`${className} ${style.datatable}`}>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => {
              key = key.replaceAll(new RegExp("-", "g"), " ");
              return <td>{key}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data
            .slice(options.perPage * page, options.perPage * (page + 1))
            .map((row) => {
              return <DTRow row={row} />;
            })}
        </tbody>
      </table>
      <footer>
        <span>
          Showing {options.perPage * page + 1} to {getLastRowIndex()} of&nbsp;
          {data.length} entries
        </span>

        <div>
          <button onClick={() => goToPage(page - 1)} disabled={page === 0}>
            Previous
          </button>
          {getPagination()}
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === maxPage}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Datatable;
