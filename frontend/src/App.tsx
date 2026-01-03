import { Box, ChakraProvider, Container, Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Nav from './components/Nav';

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <Box minH="100vh">
          <Nav />
          
          <Box pt="60px">
            <Outlet />
          </Box>
        </Box>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
