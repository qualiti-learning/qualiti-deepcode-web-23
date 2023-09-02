import {
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react';

function TableComponent({ columns = [], rows = [] }) {
  if (!rows.length) {
    return <Text size='lg'>No rows yet</Text>;
  }

  return (
    <TableContainer p={4}>
      <Table variant='striped' mt={4}>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index}>{column.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index}>
              {columns.map((column, index) => {
                const data = row[column.key];

                return (
                  <Td key={index}>
                    {typeof column.render === 'function'
                      ? column.render(data, row)
                      : data}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
