

const Headers = ({ headers }) => {
    return (
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
    );
  };
  
  const Row = ({ row }) => {
    return (
      <tr>
        {row.map(cell => (
          <td key={cell}>{cell}</td>
        ))}
      </tr>
    );
  };
  
  const Table = ({ headers, rows }) => {
    return (
      <table>
        <Headers headers={headers} />
        <tbody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </tbody>
      </table>
    );
  };

  export default Table;
  