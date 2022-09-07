import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Icon,
    Text,
    HStack,
    IconButton,
} from '@chakra-ui/react'
import { MdAddBox } from 'react-icons/md'
import {AddIcon} from '@chakra-ui/icons'
import { NavigationLink } from '../../DrawerNavigation/NavigationLink'
import { useState } from 'react'
import { FormTransactionsModal } from './FormTransactionsModal'


export function TransactionComponent() {

    const { onOpen, isOpen, onClose } = useDisclosure()
    
    return (
        <>
            <NavigationLink name="Transactions" icon={MdAddBox} onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose}>

                <ModalOverlay />
                <ModalContent
                    bg='blue.800'
                    color='black'
                    fontWeight='extrabold'
                >
                    <ModalHeader
                        color='white'
                        fontWeight='bold'
                    >
                        <HStack>
                            <Icon
                                as={MdAddBox}
                                fontSize={25}
                            />
                            <Text>
                                Transactions
                            </Text>
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <FormTransactionsModal/>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}