import { Avatar, Flex, Heading, HStack, IconButton, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FinancesContext } from "../../context/FinancesContext";
import { DrawerNavigation } from "../DrawerNavigation";

export function Header() {

    const {isFetching,isLoading} = useContext(FinancesContext)

    return (
        <Flex
            w='100%'
            justifyContent='space-between'
            align='center'
            py='15px'
            px='50px'
            position='fixed'
            bg='teal'
            zIndex={100}
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
                { (isFetching && !isLoading) &&
                <Spinner
                         thickness='4px'
                         speed='0.60s'
                         emptyColor='gray.200'
                         color='teal.600'
                         size='lg'
                     />
                }
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