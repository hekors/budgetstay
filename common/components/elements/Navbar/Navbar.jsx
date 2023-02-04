import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import Image from "next/image";
import BaseLayout from '../../layouts/BaseLayout';

const Navbar = () => {
    return (
        <Box bgColor={"black"}>
            <BaseLayout flexDirection={"row"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Image 
                    src={"/icons/logo.svg"}
                    width={"140"}
                    height={"80"}
                    alt="logo"
                    priority
                />
                    <ButtonGroup>
                        <Button colorScheme={"blue"} variant={"ghost"}>Login</Button>
                        <Button variant={"solid"} colorScheme={"blue"}>Create Account</Button>
                    </ButtonGroup>
            </BaseLayout>
        </Box>
    )
};

export default Navbar;
