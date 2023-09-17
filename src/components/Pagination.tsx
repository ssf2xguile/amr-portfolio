import { FC } from 'react';
import { WorkImage } from '@/types/portfolio';
import {
  VStack,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';

type Props = {
  maxPageNumber?: number;
  currentPageNumber?: number;
};

const Pagination: FC<Props> = ({ maxPageNumber, currentPageNumber }) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;
  return (
    <Flex justifyContent='center' my={4}>
      {currentPageNumber !== 1 && (
        <Link href={`/works/${prevPage}`}>&lt; Previous</Link>
      )}
      {' '}
      {currentPageNumber !== maxPageNumber && (
        <Link href={`/works/${nextPage}`}>Next &gt;</Link>
      )}
    </Flex>
  );
};

export default Pagination;
