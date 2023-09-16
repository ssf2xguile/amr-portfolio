import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
} from '@chakra-ui/react';
import { FC } from 'react';

const Qualification: FC = () => {
  return (
    <Box>
      <Heading as="h4" fontSize="2xl">
        Qualification
      </Heading>
      <TableContainer>
        <Table
          variant="simple"
          my={6}
          __css={{ 'table-layout': 'fixed', width: 'full' }}
        >
          <Thead>
            <Tr>
              <Th>取得日</Th>
              <Th>資格名</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2023/03</Td>
              <Td>TOEIC 680点</Td>
            </Tr>
            <Tr>
              <Td>2022/12</Td>
              <Td>応用情報技術者試験</Td>
            </Tr>
            <Tr>
              <Td>2021/12</Td>
              <Td>基本情報技術者試験</Td>
            </Tr>
            <Tr>
              <Td>2019/06</Td>
              <Td>実用英語技能検定準1級</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Qualification;
