import { Box, Heading, Text } from "@chakra-ui/react";
import BaseLayout from "../../../layouts/BaseLayout";
import AlgoliaSearchWrapper from "../../AlgoliaSearch";
import { DashboardNavbar } from "../../Navbar";
import "instantsearch.css/themes/satellite-min.css";

const StudentView = () => {
    return (
        <Box>
            <DashboardNavbar />
            <Box bgColor={"black"} pb={"24"}>
                <BaseLayout>
                    <Heading textColor={"white"}>{"Welcome, Student"}</Heading>
                    <Text textColor={"whiteAlpha.800"} fontWeight={"medium"} fontSize={"lg"} mt={"2"}>
                        {"Start looking for your future home, your oasis"}
                    </Text>
                </BaseLayout>
            </Box>
            <Box>
                <AlgoliaSearchWrapper />
            </Box>
        </Box>
    )
};

export default StudentView;