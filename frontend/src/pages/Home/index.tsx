import { 
  Box, Heading, Text, Button, Stack, Container, 
  SimpleGrid, Icon, VStack, Image 
} from "@chakra-ui/react";
import { FaCross, FaUsers, FaHeart } from "react-icons/fa";

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.900" color="white" py={24} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h1" size="2xl" mb={4}>
            Northern Nazreth <br /> Meserete Kirstos Church
          </Heading>
          <Text fontSize="lg" mb={8} opacity={0.9}>
            To know Christ and to make Him known. Join us in worship and fellowship 
            as we grow together in faith.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center">
            <Button colorScheme="yellow" size="lg">Join Us Sunday</Button>
            <Button variant="outline" colorScheme="whiteAlpha" size="lg">Our Ministries</Button>
          </Stack>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Heading textAlign="center">What We Stand For</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <FeatureItem 
              icon={FaCross} 
              title="Gospel Centered" 
              desc="We believe in the transformative power of the Message of the Cross." 
            />
            <FeatureItem 
              icon={FaUsers} 
              title="Community" 
              desc="A family where everyone belongs and finds a place to serve." 
            />
            <FeatureItem 
              icon={FaHeart} 
              title="Love & Service" 
              desc="Reaching out to Northern Nazreth with the compassion of Christ." 
            />
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Call to Action Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading mb={4}>Weekly Gatherings</Heading>
              <Text fontSize="md" color="gray.600">
                <strong>Sunday Service:</strong> 9:00 AM — 11:30 AM <br />
                <strong>Mid-week Prayer:</strong> Wednesdays at 6:00 PM <br />
                <strong>Youth Fellowship:</strong> Saturdays at 4:00 PM
              </Text>
              <Button mt={6} colorScheme="blue" variant="link">Get Directions →</Button>
            </Box>
            <Box bg="gray.200" h="250px" borderRadius="xl" display="flex" alignItems="center" justifyContent="center">
              <Text color="gray.500">[Church Building Image/Map]</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

// Small Helper Component for Features
const FeatureItem = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <VStack textAlign="center" spacing={4} p={6} border="1px" borderColor="gray.100" borderRadius="lg">
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Heading size="md">{title}</Heading>
    <Text color="gray.600">{desc}</Text>
  </VStack>
);

export default HomePage;