import { Box, Flex, Button, Text, HStack, Link, Container } from "@chakra-ui/react";

const Nav = () => {
  const navLinks = [
    { name: "Features", id: 'reatures', href: "#features" },
    { name: "Pricing", id: 'pricing', href: "#" },
    { name: "About", id: 'about', href: "#" },
  ];

  return (
    <Box bg="white" px={4} borderBottom="1px" borderColor="gray.100" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Text fontSize="xl" fontWeight="bold" color="blue.600">
            Brand
          </Text>

          {/* Navigation Links */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                id={link.id}
                key={link.name}
                href={link.href}
                _hover={{ textDecoration: "none", color: "blue.500" }}
                fontWeight="medium"
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          {/* Action Button */}
          <Flex alignItems="center">
            <Button colorScheme="blue" size="sm" fontWeight="bold">
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;