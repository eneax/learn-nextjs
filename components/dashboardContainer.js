import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
  Flex,
  Link,
  Avatar,
  Icon,
} from '@chakra-ui/react';
import { MdGroupWork } from 'react-icons/md';

import { useAuth } from '@/lib/auth';
import AddSiteModal from './addSiteModal';

const DashboardContainer = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      {/* Navbar */}
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex alignItems="center" justifyContent="center">
            <Icon
              as={MdGroupWork}
              name="logo"
              color="black"
              w={8}
              h={8}
              mr={8}
            />
            <Link mr={4}>Sites</Link>
            <Link>Feedback</Link>
          </Flex>

          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signout()}>
                Log Out
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>

      {/* Dashboard Header */}
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>

        {/* Dashboard Content */}
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardContainer;
