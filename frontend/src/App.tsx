import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Nav from './components/Nav'; // Import your Nav component

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>

        <Container maxW="container.xl" p={0}>

          <Nav />
          <Container py={20} maxW="container.lg">
            <Outlet />
          </Container>

        </Container>

      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;