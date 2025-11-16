import { ChakraProvider, Container, Heading, Text } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <Router>
          <Container py={10}>
            <Heading as="h1" mb={4}>NNMKC Website</Heading>
            <Text>Welcome. Content and routes will go here.</Text>
          </Container>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
