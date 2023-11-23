import style from "../../assets/style/datatable.module.css";

function DTFooter({ page, maxPage, options, setPage, dataLength }) {
  const getLastRowIndex = () => {
    let res = options.perPage * (page + 1);
    if (dataLength < options.perPage * (page + 1)) res = dataLength;
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
    <footer>
      <span>
        Showing {options.perPage * page + 1} to {getLastRowIndex()} of&nbsp;
        {dataLength} entries
      </span>

      <div>
        <button onClick={() => goToPage(page - 1)} disabled={page === 0}>
          Previous
        </button>
        {getPagination()}
        <button onClick={() => goToPage(page + 1)} disabled={page === maxPage}>
          Next
        </button>
      </div>
    </footer>
  );
}

export default DTFooter;