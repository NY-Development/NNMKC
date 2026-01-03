import {
  Box, Container, Heading, Text, VStack, FormControl, 
  FormLabel, Input, Textarea, Button, Checkbox, 
  Select, useColorModeValue, Icon, Stack, Alert, AlertIcon,
  HStack
} from '@chakra-ui/react';
import { FaPray, FaHandsHelping, FaLock } from 'react-icons/fa';

const PrayerRequest = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const accentColor = 'blue.600';

  return (
    <Box py={16} bg={useColorModeValue('gray.50', 'gray.900')} minH="90vh">
      <Container maxW="container.md">
        <VStack spacing={8} textAlign="center" mb={12}>
          <Icon as={FaPray} w={12} h={12} color={accentColor} />
          <Box>
            <Heading size="2xl" color="blue.900" mb={4}>How Can We Pray For You?</Heading>
            <Text fontSize="lg" color="gray.600">
              "Carry each other’s burdens, and in this way you will fulfill the law of Christ." 
              <br /><strong>— Galatians 6:2</strong>
            </Text>
          </Box>
        </VStack>

        <Box 
          bg={bgColor} 
          p={{ base: 6, md: 10 }} 
          borderRadius="2xl" 
          boxShadow="xl" 
          position="relative"
          overflow="hidden"
        >
          {/* Subtle Top Border Decor */}
          <Box position="absolute" top={0} left={0} w="full" h="4px" bg={accentColor} />

          <VStack spacing={6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              <FormControl id="name">
                <FormLabel>Full Name (Optional)</FormLabel>
                <Input placeholder="Leave blank to stay anonymous" focusBorderColor="blue.500" />
              </FormControl>

              <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" placeholder="+251..." focusBorderColor="blue.500" />
              </FormControl>
            </SimpleGrid>

            <FormControl id="request-type" isRequired>
              <FormLabel>Type of Request</FormLabel>
              <Select placeholder="Select category" focusBorderColor="blue.500">
                <option value="healing">Healing</option>
                <option value="guidance">Guidance & Wisdom</option>
                <option value="family">Family & Marriage</option>
                <option value="financial">Financial Breakthrough</option>
                <option value="thanksgiving">Thanksgiving</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>

            <FormControl id="message" isRequired>
              <FormLabel>Your Prayer Request</FormLabel>
              <Textarea 
                placeholder="Share as much or as little as you feel comfortable with..."
                rows={6}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <Stack w="full" spacing={4}>
              <Checkbox colorScheme="blue" defaultChecked>
                Keep this request confidential (Pastor & Elders only)
              </Checkbox>
              <Checkbox colorScheme="blue">
                I would like someone to call me to pray together
              </Checkbox>
            </Stack>

            <Alert status="info" borderRadius="md" variant="subtle" fontSize="sm">
              <AlertIcon />
              Your request is handled with the utmost care and respect for your privacy.
            </Alert>

            <Button 
              colorScheme="blue" 
              size="lg" 
              w="full" 
              leftIcon={<Icon as={FaHandsHelping} />}
              _hover={{ transform: 'scale(1.02)' }}
              transition="all 0.2s"
            >
              Submit Prayer Request
            </Button>

            <HStack color="gray.400" fontSize="xs" pt={2}>
              <Icon as={FaLock} />
              <Text>Secure & Confidential</Text>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

// Re-importing SimpleGrid as it was used in the snippet
import { SimpleGrid } from '@chakra-ui/react';

export default PrayerRequest;