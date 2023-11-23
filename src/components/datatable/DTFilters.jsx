function DTFilters({ setPerPage, options = { entries: true, search: true } }) {
  const changeEntries = ({ target }) => {
    setPerPage(parseInt(target.value));
  };

  return (
    <div>
      {options.entries ? (
        <div>
          Show&nbsp;
          <select name="entries" id="entries" onChange={changeEntries}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          &nbsp;entries
        </div>
      ) : null}
    </div>
  );
}

export default DTFilters;
