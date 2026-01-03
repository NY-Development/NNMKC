import {
  Box, Container, Heading, Text, VStack, HStack, Stack, 
  Badge, Button, Icon, SimpleGrid, useColorModeValue, Divider
} from '@chakra-ui/react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaBell } from 'react-icons/fa';

const upcomingEvents = [
  {
    title: "Annual Youth Conference 2026",
    date: "Feb 15 - Feb 18",
    time: "9:00 AM - 5:00 PM",
    location: "Main Sanctuary",
    category: "Special Event",
    desc: "A four-day gathering for all youth in Northern Nazreth to rekindle their fire for Christ."
  },
  {
    title: "Married Couples Seminar",
    date: "March 10, 2026",
    time: "4:00 PM",
    location: "Fellowship Hall",
    category: "Workshop",
    desc: "Building strong, Christ-centered families. Open to all married and engaged couples."
  }
];

const weeklySchedule = [
  { day: "Sunday", activity: "Main Worship Service", time: "9:00 AM" },
  { day: "Wednesday", activity: "Bible Study & Prayer", time: "6:00 PM" },
  { day: "Saturday", activity: "Youth Fellowship", time: "4:00 PM" },
];

const Events = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box py={12} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.lg">
        {/* Page Heading */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading size="2xl" color="blue.900">Church Events</Heading>
          <Text fontSize="lg" color="gray.600">
            Stay updated with what's happening at Northern Nazreth MKC.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
          {/* Left Column: Upcoming Events List (Takes 2/3 space on desktop) */}
          <VStack spacing={6} align="stretch" gridColumn={{ lg: "span 2" }}>
            <Heading size="md" mb={2} display="flex" alignItems="center">
              <Icon as={FaCalendarAlt} mr={2} color="blue.500" />
              Upcoming Events
            </Heading>
            
            {upcomingEvents.map((event, index) => (
              <Box 
                key={index} 
                bg={cardBg} 
                p={6} 
                borderRadius="xl" 
                boxShadow="sm" 
                border="1px" 
                borderColor={borderColor}
              >
                <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
                  {/* Date Badge */}
                  <VStack 
                    bg="blue.50" 
                    color="blue.600" 
                    p={4} 
                    borderRadius="lg" 
                    minW="120px" 
                    justify="center"
                  >
                    <Text fontWeight="bold" fontSize="lg" textAlign="center">
                      {event.date.split(' ')[0]}
                    </Text>
                    <Text fontSize="2xl" fontWeight="black">
                      {event.date.split(' ')[1]}
                    </Text>
                  </VStack>

                  {/* Event Details */}
                  <VStack align="flex-start" spacing={2} flex={1}>
                    <Badge colorScheme="blue">{event.category}</Badge>
                    <Heading size="md">{event.title}</Heading>
                    <Text color="gray.600" fontSize="sm">{event.desc}</Text>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2} color="gray.500" fontSize="xs">
                      <HStack><Icon as={FaClock} /><Text>{event.time}</Text></HStack>
                      <HStack><Icon as={FaMapMarkerAlt} /><Text>{event.location}</Text></HStack>
                    </Stack>
                  </VStack>

                  <Button alignSelf="center" colorScheme="blue" variant="outline" size="sm">
                    Details
                  </Button>
                </Stack>
              </Box>
            ))}
          </VStack>

          {/* Right Column: Weekly Schedule */}
          <Box>
            <Heading size="md" mb={6} display="flex" alignItems="center">
              <Icon as={FaBell} mr={2} color="yellow.500" />
              Weekly Schedule
            </Heading>
            <VStack 
              bg="blue.900" 
              color="white" 
              p={6} 
              borderRadius="xl" 
              align="stretch" 
              spacing={4}
            >
              {weeklySchedule.map((item, index) => (
                <Box key={index}>
                  <HStack justify="space-between">
                    <VStack align="flex-start" spacing={0}>
                      <Text fontWeight="bold" color="blue.200">{item.day}</Text>
                      <Text fontSize="sm">{item.activity}</Text>
                    </VStack>
                    <Text fontSize="sm" fontWeight="bold">{item.time}</Text>
                  </HStack>
                  {index !== weeklySchedule.length - 1 && <Divider mt={4} opacity={0.2} />}
                </Box>
              ))}
              <Button colorScheme="whiteAlpha" variant="solid" mt={4} size="sm">
                Full Calendar
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Events;