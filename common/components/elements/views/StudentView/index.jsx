
const StudentView = () => {
    return (
        <Box>
            <Box bgColor={"black"} pb={"24"}>
                <BaseLayout>
                    <Heading textColor={"white"}>{"Welcome, Student"}</Heading>
                    <Text textColor={"whiteAlpha.800"} fontWeight={"medium"} fontSize={"lg"} mt={"2"}>
                        {"Start looking for your future home, your oasis"}
                    </Text>
                    {/* <Box mt={"6"} display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"4"}>
                        <Button colorScheme={"blue"} onClick={() => setNewPropertyModalOpen(true)}>

                        </Button>
                    </Box> */}
                </BaseLayout>
            </Box>
        </Box>
    )
};

export default StudentView;