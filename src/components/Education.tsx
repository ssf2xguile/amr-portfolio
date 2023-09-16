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

const Education: FC = () => {
  return (
    <Box>
      <Heading as="h4" fontSize="2xl">Education</Heading>
      <TableContainer>
        <Table
          variant="simple"
          my={6}
          __css={{ 'table-layout': 'fixed', width: 'full' }}
        >
          <Thead>
            <Tr>
              <Th w='200'>在学期間</Th>
              <Th w='800'>高校・大学名</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2024/04 - 2026/03</Td>
              <Td>
                筑波大学大学院 理工情報生命学術院
                システム情報工学研究群情報理工学位プログラム
              </Td>
            </Tr>
            <Tr>
              <Td>2020/04 - 2024/03</Td>
              <Td>筑波大学 情報学群 情報科学類</Td>
            </Tr>
            <Tr>
              <Td>2016/04 - 2019/03</Td>
              <Td>茨城県立竜ヶ崎第一高等学校</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Education;
