function DTHead({ headRow = {} }) {
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
