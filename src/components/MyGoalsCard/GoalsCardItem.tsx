import { Flex, Icon, Progress, Stack, Text } from "@chakra-ui/react";
import { ElementType } from "react";


interface GoalsCardItemProps {
    icon : ElementType;
    name : string;
    progressValue : number
}


export function GoalsCardItem({icon,name,progressValue} : GoalsCardItemProps) {

    return (
        <Flex
            bg='blue.200'
            borderRadius='10px'
            p='10px'
            gap='10px'
            _hover={{
                bg: 'blue.300'
            }}
        >   
            <Icon 
                fontSize={45}
                color='gray.500'
                as={icon}
            />

            <Stack
                w='100%'
            >
                <Text
                    fontSize={14}
                    fontWeight='medium'
                >
                    {name}
                </Text>
                <Progress
                    value={progressValue}
                    hasStripe
                    colorScheme='blue'
                    size='md'
                />
            </Stack>
        </Flex>
    )
}