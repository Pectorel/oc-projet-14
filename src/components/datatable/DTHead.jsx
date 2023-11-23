/**
 *
 * - TODO : ADD Sort ASC and DESC on each key (Add sort option to disable or enable it)
 *
 * */
function DTHead({ headRow = {}, options = { sort: true } }) {
  return (
    <thead>
      <tr>
        {Object.keys(headRow).length > 0
          ? Object.keys(headRow).map((key) => {
              key = key.replaceAll(new RegExp("-", "g"), " ");
              return <td>{key}</td>;
            })
          : null}
      </tr>
    </thead>
  );
}
export default DTHead;
