/**
 *
 * Objectives : Renders only visible Row to speed up the calculation
 * But Store all data for filtering purpose
 * By default, stores by array index
 *
 *
 * Ideas :
 *  - Add default sort attribute
 *  - Add item per page
 *  - Try to render only new rows and keep the existing rows
 *
 *
 */
import DTRow from "./DTRow.jsx";
import { useEffect, useState } from "react";

function Datatable({ data, options = { perPage: 10 } }) {
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
      i++;
      if (data.length <= options.perPage * i) stop = true;
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
        <button onClick={() => goToPage(i)} disabled={page === i}>
          {i + 1}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div>
      <table>
        <thead></thead>
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
          Showing {options.perPage * page} to {getLastRowIndex()} of&nbsp;
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
