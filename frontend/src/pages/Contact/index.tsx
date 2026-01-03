import {
  Container, Flex, Box, Heading, Text, IconButton, Button,
  VStack, HStack, FormControl, FormLabel, Input,
  InputGroup, InputLeftElement, Textarea, Stack, Icon
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const Contact = () => {
  return (
    <Container maxW="container.xl" py={12} centerContent>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" w="full">
        
        {/* Left Side: Contact Information */}
        <Box bg="blue.900" color="white" borderRadius="lg" p={10} m={4} flex="1" w="full">
          <VStack spacing={8} align="flex-start">
            <Heading size="xl">Get in Touch</Heading>
            <Text color="blue.100">
              Have questions about our services or need prayer? 
              Reach out to us and we'll get back to you shortly.
            </Text>

            <VStack spacing={5} align="flex-start">
              <HStack spacing={4}>
                <Icon as={MdPhone} color="yellow.400" w={6} h={6} />
                <Text fontSize="lg">+251 911 000 000</Text>
              </HStack>
              <HStack spacing={4}>
                <Icon as={MdEmail} color="yellow.400" w={6} h={6} />
                <Text fontSize="lg">info@nnmkc.org</Text>
              </HStack>
              <HStack spacing={4}>
                <Icon as={MdLocationOn} color="yellow.400" w={6} h={6} />
                <Text fontSize="lg">Northern Nazreth, Ethiopia</Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        {/* Right Side: Contact Form */}
        <Box bg="white" borderRadius="lg" p={10} m={4} flex="1" boxShadow="xl" w="full">
          <VStack spacing={5}>
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input type="text" size="md" placeholder="Enter your name" />
              </InputGroup>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input type="email" size="md" placeholder="Enter your email" />
              </InputGroup>
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="#E0E1E7"
                _hover={{ borderRadius: 'gray.300' }}
                placeholder="How can we help you?"
              />
            </FormControl>

            <Button
              colorScheme="blue"
              bg="blue.600"
              color="white"
              _hover={{ bg: 'blue.700' }}
              w="full"
              size="lg"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>

      {/* Map Section Placeholder */}
      <Box w="full" h="400px" mt={10} borderRadius="lg" overflow="hidden" bg="gray.200">
        <iframe
          title="church-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.0!2d39.26!3d8.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzMnMDAuMCJOIDM5wrAxNSczNi4wIkU!5e0!3m2!1sen!2set!4v1630000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Contact;