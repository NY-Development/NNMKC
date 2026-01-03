import {
  Box, Container, Heading, Text, SimpleGrid, VStack, 
  HStack, Icon, Button, Divider, Badge, useColorModeValue
} from '@chakra-ui/react';
import { FaUniversity, FaMobileAlt, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';

const Giving = () => {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box py={16} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.lg">
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" mb={16}>
          <Icon as={FaHandHoldingHeart} w={16} h={16} color="blue.600" />
          <Heading size="2xl" color="blue.900">Generosity at NNMKC</Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl">
            "Each of you should give what you have decided in your heart to give, 
            not reluctantly or under compulsion, for God loves a cheerful giver." 
            <br /><strong>— 2 Corinthians 9:7</strong>
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          
          {/* Bank Transfer Details */}
          <VStack align="stretch" spacing={4}>
            <Heading size="md" mb={2}>Bank Transfers</Heading>
            <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md" borderLeft="4px solid" borderColor="blue.500">
              <HStack mb={4}>
                <Icon as={FaUniversity} color="blue.500" />
                <Text fontWeight="bold">Commercial Bank of Ethiopia (CBE)</Text>
              </HStack>
              <VStack align="flex-start" spacing={1} pl={8}>
                <Text fontSize="sm" color="gray.500">Account Name:</Text>
                <Text fontWeight="bold" fontSize="lg">Northern Nazreth MKC</Text>
                <Text fontSize="sm" color="gray.500" mt={2}>Account Number:</Text>
                <Text fontWeight="bold" fontSize="xl" letterSpacing="widest">1000123456789</Text>
              </VStack>
            </Box>

            <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md" borderLeft="4px solid" borderColor="orange.400">
              <HStack mb={4}>
                <Icon as={FaUniversity} color="orange.400" />
                <Text fontWeight="bold">Dashen Bank</Text>
              </HStack>
              <VStack align="flex-start" spacing={1} pl={8}>
                <Text fontSize="sm" color="gray.500">Account Number:</Text>
                <Text fontWeight="bold" fontSize="xl" letterSpacing="widest">12345678910</Text>
              </VStack>
            </Box>
          </VStack>

          {/* Digital / Mobile Options */}
          <VStack align="stretch" spacing={4}>
            <Heading size="md" mb={2}>Digital Giving</Heading>
            <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
              <VStack spacing={6}>
                <HStack w="full" justify="space-between">
                  <HStack>
                    <Icon as={FaMobileAlt} color="blue.400" />
                    <Text fontWeight="bold">Telebirr / CBE Birr</Text>
                  </HStack>
                  <Badge colorScheme="green">Instant</Badge>
                </HStack>
                
                <Text fontSize="sm" textAlign="center" color="gray.600">
                  Scan our QR code in the church lobby or use the merchant ID below:
                </Text>
                
                <Box bg="gray.100" p={4} borderRadius="md" w="full" textAlign="center">
                  <Text fontWeight="bold" fontSize="2xl">ID: 123456</Text>
                </Box>

                <Button colorScheme="blue" w="full" size="lg" leftIcon={<FaHeart />}>
                  Give Online (International)
                </Button>
              </VStack>
            </Box>

            <Box p={6} border="2px dashed" borderColor="gray.300" borderRadius="xl">
              <Heading size="xs" color="gray.500" mb={2} textTransform="uppercase">Impact</Heading>
              <Text fontSize="sm" color="gray.600">
                Your tithes and offerings support our local outreach in Northern Nazreth, 
                church building maintenance, and our mission programs.
              </Text>
            </Box>
          </VStack>

        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Giving;