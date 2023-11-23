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
 *  - Try to check data validity on row based on first row keys (only render same keys as the first row for other rows)
 *
 */
import { useEffect, useState } from "react";
import DTRow from "./DTRow.jsx";
import DTHead from "./DTHead.jsx";
import DTFooter from "./DTFooter.jsx";
import DTFilters from "./DTFilters.jsx";
import style from "../../assets/style/datatable.module.css";

function Datatable({ data, className, options = { perPage: 10 } }) {
  const [page, setPage] = useState(() => {
    return 0;
  });

  const [maxPage, setMaxPage] = useState(() => {
    return 1;
  });

  const [perPage, setPerPage] = useState(() => {
    return options.perPage;
  });

  const [search, setSearch] = useState(() => {
    return null;
  });

  useEffect(() => {
    // Calculating max pages
    let i = 1;
    let stop = false;

    do {
      if (getRowsToShow().length <= perPage * i) stop = true;
      else i++;
    } while (!stop);

    i -= 1;
    setMaxPage(i);

    if (page >= i) setPage(i);
  }, [perPage, search]);

  const getRowsToShow = () => {
    let res = [];
    if (typeof search == "string" && search.length >= 2) {
      for (let row of data) {
        for (let field in row) {
          if (row[field].toLowerCase().includes(search.toLowerCase())) {
            res.push(row);
            break;
          }
        }
      }
    } else {
      res = data;
    }
    return res;
  };

  return (
    <div className={`${className} ${style.datatable}`}>
      <DTFilters setPerPage={setPerPage} setSearch={setSearch} />
      <table>
        <DTHead headRow={data[0]} />
        <tbody>
          {getRowsToShow()
            .slice(perPage * page, perPage * (page + 1))
            .map((row) => {
              return <DTRow row={row} />;
            })}
        </tbody>
      </table>
      <DTFooter
        page={page}
        maxPage={maxPage}
        setPage={setPage}
        perPage={perPage}
        dataLength={getRowsToShow().length}
      />
    </div>
  );
}

export default Datatable;
