import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FC } from 'react';

const HavingSkills: FC = () => {
  return (
    <TableContainer>
      <Table
        variant="simple"
        my={6}
        __css={{ 'table-layout': 'fixed', width: 'full' }}
      >
        <TableCaption>個人開発およびチーム開発で使用する技術</TableCaption>
        <Thead>
          <Tr>
            <Th>技術</Th>
            <Th>経験年数</Th>
            <Th>スキル</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Python</Td>
            <Td>2年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>Django</Td>
            <Td>1年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>Javascript</Td>
            <Td>1年未満</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 1 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>Next.js</Td>
            <Td>1年未満</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 1 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>C言語</Td>
            <Td>2年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 2 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Table
        variant="simple"
        my={6}
        __css={{ 'table-layout': 'fixed', width: 'full' }}
      >
        <TableCaption>その他技術</TableCaption>
        <Thead>
          <Tr>
            <Th>技術</Th>
            <Th>経験年数</Th>
            <Th>スキル</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>After Effects</Td>
            <Td>4年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 4 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>Photoshop</Td>
            <Td>2年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 4 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>Illustrator</Td>
            <Td>1年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>Adobe XD</Td>
            <Td>1年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
          <Tr>
            <Td>AviUtl</Td>
            <Td>4年</Td>
            <Td>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? 'orange.300' : 'gray.300'} />
                ))}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HavingSkills;
