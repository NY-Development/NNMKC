import { useState } from "react";
import {
  Box, Flex, Stack, Heading, Text, Input, Button, 
  FormControl, FormLabel, InputGroup, InputRightElement,
  useColorModeValue, Link, Container
} from "@chakra-ui/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex minH="80vh" align="center" justify="center" bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="md" py={12} px={6}>
        <Stack spacing={8} mx="auto">
          <Stack align="center">
            <Heading fontSize="3xl" color="blue.900">NNMKC Portal</Heading>
            <Text fontSize="lg" color="gray.600">
              Welcome back, servant of God! 👋
            </Text>
          </Stack>
          
          <Box
            rounded="lg"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow="lg"
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" focusBorderColor="blue.500" />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} focusBorderColor="blue.500" />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                >
                  <Link color="blue.500">Forgot password?</Link>
                </Stack>
                <Button
                  bg="blue.600"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                  size="lg"
                >
                  Sign In
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Login;