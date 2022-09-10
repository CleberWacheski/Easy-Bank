import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    HStack,
    Text,
    VStack,
    IconButton,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRef } from 'react'
import { HiHome } from 'react-icons/hi'
import { IoLogOut } from 'react-icons/io5'
import { GoalsComponent } from '../Modal/GoalsModal'
import { TransactionComponent } from '../Modal/TransactionsModal'
import { NavigationLink } from './NavigationLink'
import { useRouter } from 'next/router'


export function DrawerNavigation() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {push} = useRouter()
    const btnRef = useRef()

    function handleSignOut () {
        push('/')
        
    }

    return (
        <>
            <IconButton 
                ref={btnRef} 
                colorScheme='teal' 
                aria-label='Open Drawer Navigation'
                onClick={onOpen}
                icon={<HamburgerIcon/>}
                fontSize={22}
                fontWeight='extrabold'
            />
    
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                isFullHeight
                allowPinchZoom

            >
                <DrawerOverlay />
                <DrawerContent
                    bg='teal.800'
                    maxW={250}
                >
                    <DrawerCloseButton
                        color='white'
                    />
                    <DrawerHeader>
                        <HStack spacing='8px' mt='20px' justify='center'>
                            <Image
                                src='/Logo.svg'
                                alt="Logo do easy bank"
                                width={40}
                                height={40}
                            />
                            <Text
                                color='gray.100'
                                fontSize={22}
                                fontWeight='semibold'
                                letterSpacing='tighter'
                            >
                                easy bank
                            </Text>
                        </HStack>
                    </DrawerHeader>
                    <DrawerBody
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                    >
                        <VStack
                            mt='32px'
                            spacing='16px'
                            align='flex-start'
                        >
                            <NavigationLink name='Dashboard' icon={HiHome} onClose={onClose} />
                            <TransactionComponent />
                            <GoalsComponent />

                        </VStack>
                        <NavigationLink
                            name='Logout'
                            icon={IoLogOut}
                            alignSelf='flex-start'
                            mb='25px'
                            onClick={handleSignOut}
                        />
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}