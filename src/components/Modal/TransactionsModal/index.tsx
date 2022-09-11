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
    useMediaQuery,
} from '@chakra-ui/react'
import { MdAddBox } from 'react-icons/md'
import { NavigationLink } from '../../DrawerNavigation/NavigationLink'
import { FormTransactionsModal } from './FormTransactionsModal'


export function TransactionComponent() {

    const { onOpen, isOpen, onClose } = useDisclosure()
    const [isLess] = useMediaQuery('(max-width: 1100px)')

    return (
        <>
            <NavigationLink name="Transactions" icon={MdAddBox} onClick={onOpen} />

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={(isLess) ? 'full' : 'lg'}
            >

                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                            <Text>
                               Add Transactions
                            </Text>
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <FormTransactionsModal />

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}