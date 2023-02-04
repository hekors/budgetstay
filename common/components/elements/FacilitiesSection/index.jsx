import { Box, Heading, Img, Text } from '@chakra-ui/react';
import BaseLayout from '../../layouts/BaseLayout';

const FacilitiesData = [
    {
        "title": "Security",
        "description": "In regards to hostels/flats, we understand your concerns. Your security is our top priority!",
        "icon": "security"
    },
    {
        "title": "Trust",
        "description": "We are the ones who have dealt with this problem, so keep your faith in us. You're in good shape with us.",
        "icon": "trust"
    },
    {
        "title": "Hygienic",
        "description": "We also appreciate the clean, hygienic environment you enjoy, and we aim to provide that in your new home as well.",
        "icon": "hygenic"
    }
]

const FacilitiesSection = () => {
    return (
        <BaseLayout>
            <Heading textAlign={"center"} fontSize={"5xl"} my={"12"}>{"Why Budget Stay"}</Heading>
            <Text textAlign={"center"} mt={"8"} fontSize={"xl"} w={"80ch"} marginRight={"auto"}
                marginLeft={"auto"}
            >
                {"BudgetStay lets you sell a property or you can rent a living space. These properties are carefully selected and maintained to ensure high standards of hygiene, providing travelers with a safe and healthy environment to rest and recharge. Whether you're traveling for college purposes or business meetings, BudgetStay offers a cost-effective solution for your accommodation needs."}
            </Text>
            <Box display={"flex"} flexDirection={"row"} alignItems="center" justifyContent={"space-between"}
                mt={"24"} gap={"1rem"}
            >
                {FacilitiesData?.map((data, index) => (
                    <Box key={index}
                        p={"12"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"start"}
                        gap={"1rem"}
                        width={"420px"}
                    >
                        <Img src={`/assets/${data?.icon}.svg`} width={"50"} />
                        <Heading size={"lg"}>{data?.title}</Heading>
                        <Text fontSize={"medium"}>{data?.description}</Text>
                    </Box>
                ))}
            </Box>
        </BaseLayout>
    )
};

export default FacilitiesSection;