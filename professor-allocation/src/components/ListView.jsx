import { useEffect, useState } from 'react';
import TableComponent from './Table';

function ListView({ columns, entity, forceRefetch }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${entity}`)
      .then((response) => response.json())
      .then((data) => setRows(data));
  }, [entity, forceRefetch]);

  return <TableComponent columns={columns} rows={rows} />;
}

export default ListView;
