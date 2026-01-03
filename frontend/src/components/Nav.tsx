import { Box, Flex, Button, Text, HStack, Link, Container } from "@chakra-ui/react";
import { FaCross } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = [
    { name: "Home", id: 'home', path: "/" },
    { name: "About Us", id: 'about-us', path: "/about-us" },
    { name: "Ministries", id: 'ministries', path: "/ministries" },
    { name: "Sermons", id: 'sermons', path: "/sermons" },
    { name: "Events", id: 'events', path: "/events" },
  ];

  return (
    <Box bg="white" px={4} borderBottom="1px" borderColor="gray.100" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box display={'flex'} alignItems={'center'} fontSize={30} color={'red.600'} gap={4}>
            <FaCross />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              NNMKC
            </Text>
          </Box>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <NavLink
                id={link.id}
                key={link.name}
                to={link.path}
              >
                {link.name}
              </NavLink>
            ))}
          </HStack>

          {/* Action Button */}
          <Flex alignItems="center">
            <Button colorScheme="blue" size="sm" fontWeight="bold">
              Plan A Visit
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;