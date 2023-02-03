import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import BaseLayout from '../../layouts/BaseLayout';

const Navbar = () => {
    return (
        <BaseLayout flexDirection={"row"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight="semibold">{"BudgetStay"}</Text>
                <ButtonGroup>
                    <Button colorScheme={"blue"} variant={"ghost"}>Login</Button>
                    <Button variant={"solid"} colorScheme="blue">Create Account</Button>
                </ButtonGroup>
        </BaseLayout>
    )
};

export default Navbar;
