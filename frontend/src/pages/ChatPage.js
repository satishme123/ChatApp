import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import MyChats from "../components/MyChats";
import { ChatState } from "../Context/ChatProvider";
import Chatbox from "../components/Chatbox";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
   
      {user && <SideDrawer />}
      <Box d="flex" style={{display:"flex"}} justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;