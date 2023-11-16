function DTRow({ row }) {
  return (
    <tr>
      {Object.keys(row).map((key) => {
        return <td>{row[key]}</td>;
      })}
    </tr>
  );
}

export default DTRow;
