import { Box, Button, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { HiCurrencyDollar } from "react-icons/hi";
import { SiMastercard } from "react-icons/si";

export function CardCredit() {
    return (
        <Flex
            flexDirection='column'
        >
            <Flex

                justifyContent='space-between'
                align='center'
            >
                <Heading
                    fontWeight='semibold'
                    fontSize={20}
                >
                    My Card
                </Heading>
                <Button
                    colorScheme='teal'
                    fontSize={14}
                    fontWeight='semibold'
                    px='25px'
                >
                    Add Card
                </Button>
            </Flex>
            <Flex
                flexDir='column'
                mt='24px'
                bg='#9BACA9'
                borderRadius='10'
                py={5}
                px={10}
                w='75%'
            >
                <Flex
                    justifyContent='space-between'
                >
                    <Icon
                        as={HiCurrencyDollar}
                        fontSize={30}
                        color='blue.500'
                    />
                    <Icon
                        as={SiMastercard}
                        fontSize={26}
                        color='purple.900'
                        mr={5}
                    />
                </Flex>
                <HStack
                    mt={10}
                    spacing={5}
                    fontSize={15}
                    fontWeight='semibold'
                    color='white'
                >
                    <Text>4585</Text>
                    <Text>7469</Text>
                    <Text>4296</Text>
                    <Text>1428</Text>
                </HStack>
                <Text
                    alignSelf='flex-end'
                    fontSize={18}
                    fontWeight='semibold'
                    color='white'
                    mt='10px'
                >
                    17/24
                </Text>
            </Flex>
        </Flex>
    )
}