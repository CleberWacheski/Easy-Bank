import { Avatar, Flex, Heading, Icon } from "@chakra-ui/react";
import {IoMdNotificationsOutline} from 'react-icons/io'

export function Header() {
    return (
        <Flex
            w='90%'
            justifyContent='space-between'
            py='20px'
        >
            <Heading 
                fontSize={24}
            >
                Dashboard
            </Heading>
            <Flex
                justify='center'
                align='center'
                gap='30px'
            >
                <Icon
                    as={IoMdNotificationsOutline}
                    fontSize={28}
                />
                <Avatar
                    name='Cleber Wacheski'
                    src='https://avatars.githubusercontent.com/u/94264158?v=4'
                    size='md'
                />
            </Flex>
        </Flex>
    )
}