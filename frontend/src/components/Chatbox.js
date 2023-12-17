import { Box } from "@chakra-ui/layout";
// import "./styles.css";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";
import { useBreakpointValue } from "@chakra-ui/react";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  const width= useBreakpointValue({base:"100%",md:"68%"})

  return (
    <Box
    display={selectedChat?"flex":"none"}
    //   d={{ selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={width}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;