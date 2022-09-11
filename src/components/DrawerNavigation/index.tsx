import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { HiHome } from 'react-icons/hi'
import { GoalsComponent } from '../Modal/GoalsModal'
import { TransactionComponent } from '../Modal/TransactionsModal'
import { NavigationLink } from './NavigationLink'
import { MutableRefObject } from 'react'

interface DrawerProps {
    isOpen : boolean;
    onClose : ()=> void;
    btnRef : MutableRefObject<HTMLButtonElement>
}


export function DrawerNavigation({btnRef,isOpen,onClose}: DrawerProps) {

   

    return (
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

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
    )
}