import { Box, HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useMediaQuery } from "@chakra-ui/react";
import { useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { FormGoals } from "./FormGoals";

interface GoalsModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export function GoalsModal({ isOpen, onClose }: GoalsModalProps) {

    const [isLess] = useMediaQuery('(max-width: 1100px)')

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={(isLess) ? 'full' : 'lg'}
        >

            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text>
                        Add Goals
                    </Text>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <FormGoals />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}