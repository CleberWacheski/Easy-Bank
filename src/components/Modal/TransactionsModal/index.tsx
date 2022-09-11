import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Icon,
    Text,
    HStack,
} from '@chakra-ui/react'
import { MdAddBox } from 'react-icons/md'
import { NavigationLink } from '../../DrawerNavigation/NavigationLink'
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