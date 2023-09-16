import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
  Heading,
  Box,
} from '@chakra-ui/react';
import { FC } from 'react';

const Career: FC = () => {
  return (
    <Box>
      <Heading as="h4" fontSize="2xl">Career</Heading>
      <TableContainer>
        <Table
          variant="simple"
          my={6}
          __css={{ 'table-layout': 'fixed', width: 'full' }}
        >
          <TableCaption>インターン・アルバイトを含む</TableCaption>
          <Thead>
            <Tr>
              <Th>在籍期間</Th>
              <Th>会社名</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2022/09 - 2022/09</Td>
              <Td>みずほリサーチ&テクノロジーズ株式会社</Td>
            </Tr>
            <Tr>
              <Td>2022/08 - 2022/08</Td>
              <Td>株式会社日立ソリューションズ</Td>
            </Tr>
            <Tr>
              <Td>2022/08 - 2022/08</Td>
              <Td>ニフティ株式会社</Td>
            </Tr>
            <Tr>
              <Td>2021/12 - 現在</Td>
              <Td>合同会社カフェラテ</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Career;
