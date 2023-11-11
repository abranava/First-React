import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Flex,
  Input,
  Button,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />

          {/* Header Section */}
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Heading>Abraham Navarro</Heading>
            <Text>Frontend Developer & Designer</Text>
          </VStack>

          {/* About Section */}
          <Box p={5}>
            <Heading>About Me</Heading>
            <Text mt={3}>
            Bilingual operational leader with a track record in data analysis and process innovation, notably developing FRASER, an AI bot for Amazon. Experienced in creating and managing Amazon's Business Intelligence branch, significantly enhancing efficiency through automation. Skilled in diverse technical tools, I'm adept at driving operational improvements and adapting swiftly to new technologies.            </Text>
          </Box>

          {/* Portfolio Section */}
          <Box p={5}>
            <Heading>My Portfolio</Heading>
            <SimpleGrid columns={2} spacing={10} mt={5}>
              {/* Repeat this Box for each project */}
              <Box boxShadow="lg" p={5} rounded="md">
                <Image src="/project-image.jpg" alt="Project Image" />
                <Text mt={3}>Project Description</Text>
              </Box>
              {/* Repeat this Box for each project */}
              <Box boxShadow="lg" p={5} rounded="md">
                <Image src="/project-image.jpg" alt="Project Image" />
                <Text mt={3}>Project Description</Text>
              </Box>
              {/* Repeat this Box for each project */}
              <Box boxShadow="lg" p={5} rounded="md">
                <Image src="/project-image.jpg" alt="Project Image" />
                <Text mt={3}>Project Description</Text>
              </Box>
              {/* Repeat this Box for each project */}
              <Box boxShadow="lg" p={5} rounded="md">
                <Image src="/project-image.jpg" alt="Project Image" />
                <Text mt={3}>Project Description</Text>
              </Box>
            </SimpleGrid>
          </Box>
          

          {/* Contact Section */}
          <Flex justify="center" p={5}>
            <VStack spacing={5}>
              <Heading>Contact Me</Heading>
              <Input placeholder="Your Email" />
              <Button colorScheme="teal">Send Message</Button>
            </VStack>
          </Flex>

          {/* Footer Section */}
          <Box p={5}>
            <Text>&copy; {new Date().getFullYear()} Abraham Navarro. All rights reserved.</Text>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
