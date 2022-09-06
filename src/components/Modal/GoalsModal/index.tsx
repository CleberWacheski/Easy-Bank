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
    FormControl,
    FormLabel,
    Input,
    VStack,
    Select,
    IconButton,
} from '@chakra-ui/react'
import { MdAddBox } from 'react-icons/md'
import {AddIcon} from '@chakra-ui/icons'
import { NavigationLink } from '../../NavigationBar/NavigationLink'


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
                        <FormControl
                            p='18px'
                        >
                            <VStack
                                align='flex-start'
                            >
                                <FormLabel>Name</FormLabel>
                                <Input
                                    variant='filled'
                                />
                                <FormLabel>Amount</FormLabel>
                                <Input
                                    type='number'
                                    variant='filled'
                                />
                                <FormLabel>Category</FormLabel>
                                <Select placeholder='Select Type' variant='filled'>
                                    <option>Computer</option>
                                    <option>Car</option>
                                    <option>Any</option>
                                </Select>
                                
                            </VStack>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                            <IconButton
                                colorScheme='teal'
                                aria-label='Search database'
                                icon={<AddIcon />}
                            />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}