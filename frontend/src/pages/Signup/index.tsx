import { useState } from "react";
import {
  Box, Flex, Stack, Heading, Text, Input, Button, 
  FormControl, FormLabel, InputGroup, InputRightElement,
  useColorModeValue, Link, Container, SimpleGrid
} from "@chakra-ui/react";

const SignUp = () => {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <Flex minH="90vh" align="center" justify="center" bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="lg" py={12} px={6}>
        <Stack spacing={8} mx="auto">
          <Stack align="center">
            <Heading fontSize="3xl" color="blue.900" textAlign="center">
              Join NNMKC Family
            </Heading>
            <Text fontSize="md" color="gray.600">
              Create an account to stay updated with our community.
            </Text>
          </Stack>
          
          <Box rounded="lg" bg={useColorModeValue("white", "gray.700")} boxShadow="xl" p={8}>
            <Stack spacing={4}>

              <FormControl id="fullName" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="John Doe" focusBorderColor="blue.500" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="email@example.com" focusBorderColor="blue.500" />
              </FormControl>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPwd ? "text" : "password"} focusBorderColor="blue.500" />
                  </InputGroup>
                </FormControl>

                <FormControl id="confirmPassword" isRequired>
                  <FormLabel>Confirm</FormLabel>
                  <InputGroup>
                    <Input type={showPwd ? "text" : "password"} focusBorderColor="blue.500" />
                    <InputRightElement h="full">
                      <Button variant="ghost" size="sm" onClick={() => setShowPwd(!showPwd)}>
                        {showPwd ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </SimpleGrid>

              <Stack spacing={6} pt={2}>
                <Button
                  size="lg"
                  bg="blue.600"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                  fontWeight="bold"
                >
                  Sign Up
                </Button>
              </Stack>

              <Stack pt={4}>
                <Text align="center" fontSize="sm" color="gray.600">
                  Already a member? <Link color="blue.500" href="/login">Login here</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default SignUp;