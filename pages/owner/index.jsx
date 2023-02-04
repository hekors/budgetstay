import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import BaseLayout from '../../common/components/layouts/BaseLayout';

const OwnerScreen = () => {
    return (
        <Box>
            <Box bgColor={"black"} py={"24"}>
                <BaseLayout>
                    <Heading textColor={"white"}>{"Welcome, Owner"}</Heading>
                    <Text textColor={"whiteAlpha.800"} fontWeight={"medium"} fontSize={"lg"} mt={"2"}>
                        {"Start by listing your properties and locations for students"}
                    </Text>
                    <Box mt={"6"} display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"4"}>
                        <Link href={"/owner/new"}>
                            <Button colorScheme={"blue"}>
                                {"Add new Property"}
                            </Button>
                        </Link>
                    </Box>
                </BaseLayout>
            </Box>
            <Box className="owner-dashbaord-section">
                <BaseLayout>
                    <Heading fontSize={"2xl"}>{"Onwer Dashboard"}</Heading>
                </BaseLayout>
            </Box>
        </Box>
    )
};

export default OwnerScreen;