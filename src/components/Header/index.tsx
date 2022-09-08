import { Avatar, Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import { IoMdNotificationsOutline } from 'react-icons/io'
import { DrawerNavigation } from "../DrawerNavigation";

export function Header() {
    return (
        <Flex
            w='100%'
            justifyContent='space-between'
            align='center'
            py='15px'
            px='50px'
            position='fixed'
            bg='teal'
        >
            <HStack
                spacing='20px'
            >
                <DrawerNavigation />
                <Heading
                    fontSize={24}
                    color='white'
                >
                    Dashboard
                </Heading>
            </HStack>

            <Flex
                justify='center'
                align='center'
                gap='30px'
            >
                <IconButton
                    icon={<IoMdNotificationsOutline />}
                    aria-label='Open Notifications'
                    colorScheme='teal'
                    borderRadius='full'
                    fontSize={28}
                />
                <Avatar
                    name='Cleber Wacheski'
                    src='https://avatars.githubusercontent.com/u/94264158?v=4'
                    size='md'
                    cursor='pointer'
                />
            </Flex>
        </Flex>
    )
}