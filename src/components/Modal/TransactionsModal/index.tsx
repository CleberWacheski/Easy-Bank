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
import { TransactionButtonModal } from './TransactionButtonModal'
import { useState } from 'react'


export function TransactionComponent() {

    const { onOpen, isOpen, onClose } = useDisclosure()
    const [type, setType] = useState('')

    return (
        <>
            <NavigationLink name="Transactions" icon={MdAddBox} onClick={onOpen} />

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
                                Transactions
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
                                    <option>Food</option>
                                    <option>Shopping</option>
                                    <option>Any</option>
                                </Select>
                                <HStack
                                    pt='15px'
                                >
                                    <TransactionButtonModal
                                        Type='Income'
                                        active={type}
                                        onClick={()=>setType('Income')}
                                        
                                    />
                                    <TransactionButtonModal
                                        Type='Expenses'
                                        active={type}
                                        onClick={()=>setType('Expenses')}
                                    />
                                    <TransactionButtonModal
                                        Type='Savings'
                                        active={type}
                                        onClick={()=>setType('Savings')}
                                    />
                                </HStack>
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