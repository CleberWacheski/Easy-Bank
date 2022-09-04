import { Button, Flex, Heading, HStack, Input ,theme} from "@chakra-ui/react";
import { GoalsCardItem } from "./GoalsCardItem";
import { MdOutlineComputer } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";

export function MyGoalsCard() {
    return (
        <Flex
            flexDir='column'
            align='center'
            justify='center'
        >
            <HStack>
                <Input
                    placeholder="Seach your goals"
                    maxW='230px'
                />
                <Button
                    px='30px'
                    colorScheme='teal'
                >
                    Send
                </Button>
            </HStack>
            <Flex
                mt='15px'
                w='75%'
                p='20px'
                justifyContent='space-between'
                align='center'
            >
                <Heading
                    fontSize={20}
                    fontWeight='semibold'
                >
                    My Goals
                </Heading>
                <Button
                    colorScheme='teal'
                    px='20px'
                >
                    Add
                </Button>
            </Flex>
            <Flex
                flexDir='column'
                w='60%'
                gap='8px'
                maxHeight='300px'
                cursor='pointer'
                overflow='auto'
                px='8px'
                css={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme.colors.blue[300],
                        borderRadius: '24px',
                    },
                }}
            >
                <GoalsCardItem
                    icon={MdOutlineComputer}
                    name='New iMac'
                    progressValue={50}
                />
                <GoalsCardItem
                    icon={RiComputerFill}
                    name='New Macbook 14'
                    progressValue={60}
                />
                <GoalsCardItem
                    icon={AiOutlineCar}
                    name='Car'
                    progressValue={5}
                />
                

            </Flex>

        </Flex>
    )
}