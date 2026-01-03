import {
  Container, Flex, Box, Heading, Text, Button, VStack, HStack,
  FormControl, FormLabel, Input, InputGroup, InputLeftElement,
  Textarea, Icon, SimpleGrid, useColorModeValue
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const About = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        
        {/* Left: Info Section */}
        <VStack 
          bg="blue.900" 
          color="white" 
          borderRadius="xl" 
          p={{ base: 6, md: 10 }} 
          align="flex-start" 
          spacing={8}
        >
          <Box>
            <Heading size="xl" mb={4}>Visit Us</Heading>
            <Text color="blue.100" fontSize="lg">
              We would love to welcome you to our community in Northern Nazreth.
            </Text>
          </Box>

          <VStack spacing={6} align="flex-start">
            <HStack spacing={4}>
              <Icon as={MdPhone} color="blue.300" w={6} h={6} />
              <Text fontSize="md">+251 911 00 00 00</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdEmail} color="blue.300" w={6} h={6} />
              <Text fontSize="md">info@nnmkc.org</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdLocationOn} color="blue.300" w={6} h={6} />
              <Text fontSize="md">Nazreth (Adama), Ethiopia</Text>
            </HStack>
          </VStack>

          {/* Map Placeholder */}
          <Box 
            w="full" 
            h="200px" 
            bg="blue.800" 
            borderRadius="md" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <iframe
              title="church-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.0!2d39.26!3d8.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzMnMDAuMCJOIDM5wrAxNSczNi4wIkU!5e0!3m2!1sen!2set!4v1630000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
          ></iframe>
          </Box>
        </VStack>

        {/* Right: Contact Form */}
        <Box 
          bg={useColorModeValue('white', 'gray.700')} 
          borderRadius="xl" 
          p={{ base: 6, md: 10 }} 
          boxShadow="2xl"
        >
          <VStack spacing={5}>
            <Heading size="lg" color="blue.900" alignSelf="flex-start">Send a Message</Heading>
            
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson color="gray.300" />} />
                <Input type="text" placeholder="Your Full Name" focusBorderColor="blue.500" />
              </InputGroup>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail color="gray.300" />} />
                <Input type="email" placeholder="Your Email Address" focusBorderColor="blue.500" />
              </InputGroup>
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="How can we pray for you or help you?"
                rows={5}
                focusBorderColor="blue.500"
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
      </SimpleGrid>
    </Container>
  );
};

export default About;