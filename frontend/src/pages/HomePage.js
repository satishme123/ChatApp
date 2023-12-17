import { Box, Container, Text,Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs } from "@chakra-ui/react";
import React from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup"

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
      style={{display:"flex"}}
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        m="40px 0 15px 0"
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
