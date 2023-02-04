import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import BaseLayout from "../../../layouts/BaseLayout";
import { CloseIcon } from "@chakra-ui/icons";
import ReactModal from 'react-modal';
import ListNewProperty from "./ListNewProperty";
import { DashboardNavbar } from "../../Navbar";

const SellerView = () => {
    const [isNewPropertyModalOpen, setNewPropertyModalOpen] = useState(false);
    return (
        <>
            <DashboardNavbar />
            <Box>
                <Box bgColor={"black"} pb={"24"}>
                    <BaseLayout>
                        <Heading textColor={"white"}>{"Welcome, Seller"}</Heading>
                        <Text textColor={"whiteAlpha.800"} fontWeight={"medium"} fontSize={"lg"} mt={"2"}>
                            {"Start listing your properties for students"}
                        </Text>
                        <Box mt={"6"} display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"4"}>
                            <Button colorScheme={"blue"} onClick={() => setNewPropertyModalOpen(true)}>
                                {"Add a new property"}
                            </Button>
                        </Box>
                    </BaseLayout>
                </Box>
                <Box className="owner-dashbaord-section">
                    <BaseLayout>
                        <Heading fontSize={"xl"}>{"Latest Rental Properties"}</Heading>
                    </BaseLayout>
                </Box>
            </Box>
            <ReactModal
                isOpen={isNewPropertyModalOpen} 
                onRequestClose={() => setNewPropertyModalOpen(false)}
                style={{
                    overlay: {
                        background: "rgba(0, 0, 0, 0.200)",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    content: {
                        marginRight: "auto",
                        marginLeft: "auto",
                        width: "fit-content",
                        minWidth: "420px",
                        maxWidth: "800px",
                        height: "fit-content",
                        minHeight: "300px",
                        maxHeight: "660px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                        borderRadius: "24px"
                    }
                }}
            >
                <Box px={"6"} pb={"4"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Heading fontSize={"xl"}>{"Listing New Property"}</Heading>
                    <Button variant={"ghost"} colorScheme={"blue"} onClick={() => setNewPropertyModalOpen(false)}>
                        <CloseIcon />
                    </Button>
                </Box>
                <Divider />
                <Box px={"6"} py={"4"} overflowY={"scroll"}>
                    <ListNewProperty />
                </Box>
            </ReactModal>
        </>
    )
};

export default SellerView;