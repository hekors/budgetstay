import { Box, Button, FormControl, FormLabel, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { Slider } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
import { useEffect, useState } from "react";

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const ListNewProperty = () => {
    const [priceBracket, setPriceBracket] = useState({
        minimumPrice: 5,
        maximumPrice: 15
    });

    return (
        <Box display={"grid"} alignItems={"start"} justifyContent={"start"} gap={"8"} w={"fit-content"}
            marginRight={"auto"} marginLeft={"auto"}
        >
            <Box>
                <FormControl>
                    <FormLabel>{"Let us know what defines you better?"}</FormLabel>
                    <Select placeholder="What Defines you better?">
                        {[
                            { label: "Owner", value: "owner" },
                            { label: "Agent", value: "agent" },
                        ].map((option, optionIndex) => (
                            <option value={option?.value} key={optionIndex}>{option?.label}</option>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <FormControl>
                <FormLabel>{"Property Name"}</FormLabel>
                <Input
                    type={"text"}
                    name="property-name"
                    w={"320px"}
                    variant="filled"
                    placeholder="Enter your property name"
                    _focus={{ boxShadow: "outline" }}
                />
            </FormControl>
            <Box display={"flex"} flexDirection={"row"} alignItems={"start"} justifyItems={"start"} gap={"6"}>
                <FormControl>
                    <FormLabel>{"Property Address"}</FormLabel>
                    <Input
                        type={"text"}
                        name="property-address"
                        w={"320px"}
                        variant="filled"
                        placeholder="Enter an address"
                        _focus={{ boxShadow: "outline" }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>{"Pin Code"}</FormLabel>
                    <Input
                        type={"text"}
                        name="property-pincode"
                        w={"260px"}
                        variant="filled"
                        placeholder="Enter an address"
                        _focus={{ boxShadow: "outline" }}
                    />
                </FormControl>
            </Box>
            <FormControl>
                <FormLabel>{"Let us know your property type?"}</FormLabel>
                <Box>
                    <Select placeholder="Select Property Type">
                        {[
                            { label: "PG / Paying Guest", value: "paying-guest" },
                            { label: "Hostel", value: "hostel" },
                            { label: "Flat", value: "flat" }
                        ].map((option, optionIndex) => (
                            <option value={option?.value} key={optionIndex}>{option?.label}</option>
                        ))}
                    </Select>
                </Box>
            </FormControl>
            <Box display={"flex"} flexDirection={"row"} alignItems={"start"} justifyItems={"start"} gap={"6"}>
                <FormControl>
                    <FormLabel>{"List the facilities you're providing"}</FormLabel>
                    <Textarea 
                        maxWidth={"320px"}
                        minWidth={"320px"}
                        name="facilities-description"
                        variant="filled"
                        placeholder="List down the facilities you provide"
                        _focus={{ boxShadow: "outline" }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>{"Owner Contact Number"}</FormLabel>
                    <Input 
                        maxWidth={"320px"}
                        name="facilities-description"
                        variant="filled"
                        placeholder="Eg. (+01) 99990-98889" 
                        _focus={{ boxShadow: "outline" }}
                    />
                </FormControl>
            </Box>
            <Box>
                <Slider range defaultValue={[priceBracket?.minimumPrice, priceBracket?.maximumPrice]} 
                    onChange={(value) => {
                        setPriceBracket({
                            ...priceBracket,
                            minimumPrice: value[0],
                            maximumPrice: value[1]
                        })
                    }}
                />
                <Box fontWeight={"medium"} fontSize={"xl"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"1"}>
                    {"Rs. "}
                    <Text>{priceBracket?.minimumPrice * 1000}</Text>
                    <Text>{"-"}</Text>
                    <Text>{priceBracket?.maximumPrice * 1000}</Text>
                </Box>
            </Box>
            <FormControl>
                <FormLabel>{"Upload an image"}</FormLabel>
                <Dragger style={{
                    paddingRight: "2rem",
                    paddingLeft: "2rem",
                }} {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                        Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Dragger>
            </FormControl>
            <Button type="submit" variant={"solid"} colorScheme="blue">{"Upload Property"}</Button>
        </Box>
    )
};


export default ListNewProperty;