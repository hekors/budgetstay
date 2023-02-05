import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SellerView from "../common/components/elements/views/SellerView";
import StudentView from "../common/components/elements/views/StudentView";

const Dashboard = () => {
  const [userCategory, setUserCategory] = useState("");

  useEffect(() => {
    setUserCategory(localStorage.getItem("user-category"));
  });

  return (
    <Box>
      {userCategory && userCategory === "seller"
        ? <SellerView />
        : <StudentView />
      }
    </Box>
  );
};

export default Dashboard;
