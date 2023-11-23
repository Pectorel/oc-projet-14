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
 *  - Try to check data validity on row based on first row keys (only render same keys as the first row for other rows)
 *
 */
import { useEffect, useState } from "react";
import DTRow from "./DTRow.jsx";
import DTHead from "./DTHead.jsx";
import style from "../../assets/style/datatable.module.css";
import DTFooter from "./DTFooter.jsx";

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

  return (
    <div className={`${className} ${style.datatable}`}>
      <table>
        <DTHead headRow={data[0]} />
        <tbody>
          {data
            .slice(options.perPage * page, options.perPage * (page + 1))
            .map((row) => {
              return <DTRow row={row} />;
            })}
        </tbody>
        <DTFooter
          page={page}
          maxPage={maxPage}
          setPage={setPage}
          options={options}
          dataLength={data.length}
        />
      </table>
    </div>
  );
}

export default Datatable;
