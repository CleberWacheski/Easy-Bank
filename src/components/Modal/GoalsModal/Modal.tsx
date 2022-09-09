import { HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { MdAddBox } from "react-icons/md";
import { FormGoals } from "./FormGoals";

interface GoalsModalProps {
    isOpen : boolean;
    onClose: ()=> void;
}


export function GoalsModal({isOpen,onClose} : GoalsModalProps) {

    return (
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
                    <FormGoals />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}