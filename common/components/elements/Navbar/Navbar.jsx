import { Box, Button, ButtonGroup, Container, Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Box flexDirection={"row"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight="semibold">{"BudgetStay"}</Text>
            <Container>
                <ButtonGroup>
                    <Button colorScheme={"blue"} variant={"ghost"}>Login</Button>
                    <Button variant={"solid"} colorScheme="blue">Create Account</Button>
                </ButtonGroup>
            </Container>
        </Box>
    )
};

export default Navbar;