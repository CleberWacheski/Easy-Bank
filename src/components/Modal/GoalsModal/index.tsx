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
import { FormGoals } from './FormGoals'


export function GoalsComponent() {

    const { onOpen, isOpen, onClose } = useDisclosure()
    

    return (
        <>
            <NavigationLink name="Goals" icon={MdAddBox} onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose}>

                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <HStack>
                            <Icon
                                as={MdAddBox}
                                fontSize={25}
                            />
                            <Text>
                                Goals
                            </Text>
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                       <FormGoals/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}