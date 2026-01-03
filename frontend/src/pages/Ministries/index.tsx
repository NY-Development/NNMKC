import {
  Box, Container, Heading, Text, SimpleGrid, Image, 
  Button, VStack, Badge, Stack, useColorModeValue
} from '@chakra-ui/react';

const ministries = [
  {
    title: "Youth Ministry",
    category: "Next Gen",
    desc: "Empowering the next generation of believers through fellowship, study, and fun.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Women's Fellowship",
    category: "Support",
    desc: "A space for women to grow in grace, share wisdom, and support one another in faith.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Worship & Arts",
    category: "Service",
    desc: "Leading our congregation into the presence of God through music and creative expression.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Children's Ministry",
    category: "Education",
    desc: "Biblical foundations taught in a fun, safe, and engaging environment for kids.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Outreach & Mission",
    category: "Community",
    desc: "Reaching Northern Nazreth and beyond with the practical love and gospel of Jesus.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Prayer Ministry",
    category: "Spiritual",
    desc: "The powerhouse of our church. Join us as we intercede for our community and world.",
    image: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&q=80&w=400",
  }
];

const Ministries = () => {
  const bgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box py={12} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl">
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading size="2xl" color="blue.900">Our Ministries</Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl">
            At NNMKC, there is a place for everyone. Discover our diverse ministries 
            and find where you can grow and serve.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {ministries.map((m, index) => (
            <Box 
              key={index} 
              bg={bgColor} 
              borderRadius="xl" 
              overflow="hidden" 
              boxShadow="md"
              transition="transform 0.3s"
              _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl' }}
            >
              <Image src={m.image} h="200px" w="full" objectFit="cover" />
              <Box p={6}>
                <Badge colorScheme="blue" mb={2}>{m.category}</Badge>
                <Heading size="md" mb={3}>{m.title}</Heading>
                <Text color="gray.600" mb={5} noOfLines={3}>
                  {m.desc}
                </Text>
                <Button variant="outline" colorScheme="blue" w="full">
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Ministries;