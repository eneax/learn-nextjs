import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './table';

const RowSkeleton = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
);

const SiteTableSkeleton = () => (
  <Table>
    <thead>
      <Tr>
        <Th>Name</Th>
        <Th>Site Link</Th>
        <Th>Feedback Link</Th>
        <Th>Date Added</Th>
        <Th />
      </Tr>
    </thead>
    <tbody>
      <RowSkeleton width="75px" />
      <RowSkeleton width="125px" />
      <RowSkeleton width="50px" />
      <RowSkeleton width="100px" />
      <RowSkeleton width="75px" />
    </tbody>
  </Table>
);

export default SiteTableSkeleton;
