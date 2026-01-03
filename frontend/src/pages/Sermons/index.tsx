import {
  Box, Container, Heading, Text, SimpleGrid, Image, Button, 
  VStack, HStack, Icon, Badge, Input, InputGroup, InputLeftElement,
  Stack, useColorModeValue,
  Flex
} from '@chakra-ui/react';
import { FaPlay, FaSearch, FaRegCalendarAlt, FaUser } from 'react-icons/fa';

const sermonList = [
  {
    title: "Walking in the Spirit",
    speaker: "Pastor Abraham T.",
    date: "Dec 28, 2025",
    category: "New Life",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400"
  },
  {
    title: "The Power of Prayer",
    speaker: "Sis. Martha G.",
    date: "Dec 21, 2025",
    category: "Spiritual Growth",
    thumbnail: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=400"
  },
  {
    title: "Community of Grace",
    speaker: "Pastor Abraham T.",
    date: "Dec 14, 2025",
    category: "Foundation",
    thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400"
  }
];

const Sermons = () => {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box py={10} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl">
        {/* Header & Search */}
        <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" mb={10}>
          <Box>
            <Heading size="xl" color="blue.900">Sermon Archive</Heading>
            <Text color="gray.600">Listen to the latest word from NNMKC</Text>
          </Box>
          <InputGroup maxW={{ base: 'full', md: '300px' }}>
            <InputLeftElement children={<FaSearch color="gray.300" />} />
            <Input placeholder="Search sermons..." bg={cardBg} />
          </InputGroup>
        </Stack>

        {/* Featured Sermon */}
        <Box 
          bg="blue.800" 
          borderRadius="2xl" 
          overflow="hidden" 
          mb={12} 
          color="white"
          boxShadow="2xl"
        >
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box h="300px" bg="gray.600" pos="relative">
              <Image 
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800" 
                h="full" w="full" objectFit="cover" opacity={0.7}
              />
              <Flex pos="absolute" top="0" left="0" w="full" h="full" align="center" justify="center">
                <Button leftIcon={<FaPlay />} colorScheme="yellow" size="lg" borderRadius="full">Watch Latest</Button>
              </Flex>
            </Box>
            <VStack p={10} align="flex-start" justify="center" spacing={4}>
              <Badge colorScheme="yellow">Latest Message</Badge>
              <Heading size="lg">Renewing Your Mind in 2026</Heading>
              <Text fontSize="md" opacity={0.8}>
                Start the year with a focus on God's promises. Join Pastor Abraham as he 
                explores Romans 12 and what it means to be transformed.
              </Text>
              <HStack spacing={6}>
                <HStack><Icon as={FaUser} /><Text fontSize="sm">Pastor Abraham T.</Text></HStack>
                <HStack><Icon as={FaRegCalendarAlt} /><Text fontSize="sm">Jan 4, 2026</Text></HStack>
              </HStack>
            </VStack>
          </SimpleGrid>
        </Box>

        {/* Previous Sermons Grid */}
        <Heading size="md" mb={6}>Previous Series</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {sermonList.map((sermon, index) => (
            <Box key={index} bg={cardBg} borderRadius="xl" overflow="hidden" boxShadow="md" _hover={{ shadow: 'xl' }}>
              <Box h="180px" pos="relative">
                <Image src={sermon.thumbnail} w="full" h="full" objectFit="cover" />
                <Box pos="absolute" bottom={3} right={3}>
                   <Button size="xs" colorScheme="blue" leftIcon={<FaPlay />}>Watch</Button>
                </Box>
              </Box>
              <Box p={5}>
                <Text fontSize="xs" fontWeight="bold" color="blue.500" mb={1}>{sermon.category.toUpperCase()}</Text>
                <Heading size="sm" mb={2}>{sermon.title}</Heading>
                <Text fontSize="sm" color="gray.500" mb={4}>{sermon.speaker}</Text>
                <HStack justify="space-between">
                  <Text fontSize="xs" color="gray.400">{sermon.date}</Text>
                  <Button variant="link" size="xs" colorScheme="blue">Notes (PDF)</Button>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Sermons;