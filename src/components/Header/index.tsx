import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Flex, Heading, HStack, IconButton, Spinner, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FinancesContext } from "../../context/FinancesContext";
import { UserContext } from "../../context/UserContext";
import { DrawerNavigation } from "../DrawerNavigation";
import { NavigationMobile } from "../NavigationMobile";

export function Header() {

    const { isFetching, isLoading } = useContext(FinancesContext)

    const [isLess] = useMediaQuery('(max-width: 1100px)')

    const { name, photo } = useContext(UserContext)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

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
                {(isLess) ?
                    <NavigationMobile />
                    :

                    <>
                        <IconButton
                            ref={btnRef}
                            colorScheme='teal'
                            aria-label='Open Drawer Navigation'
                            onClick={onOpen}
                            icon={<HamburgerIcon />}
                            fontSize={22}
                            fontWeight='extrabold'
                        />
                        <DrawerNavigation
                            btnRef={btnRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        />
                    </>
                    
                }
                <Heading
                    fontSize={24}
                    color='white'
                >
                    Dashboard
                </Heading>
                {(isFetching && !isLoading) &&
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
                    name={name}
                    src={photo}
                    size='md'
                    cursor='pointer'
                />
            </Flex>
        </Flex>
    )
}