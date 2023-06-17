import "./Table.scss";

const Table = ({ vesselData }) => {
  return (
    <div className="table-section">
      <table className="table-section__table">
        <tr className="table-section__table--header">
          <th className="table-section__table--label">Period code</th>
          <th className="table-section__table--label">End-of-day price</th>
          <th className="table-section__table--label">Day-on-day movements</th>
        </tr>
        {vesselData && vesselData}
      </table>
    </div>
  );
};

export default Table;
