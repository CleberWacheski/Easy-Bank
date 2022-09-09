import {
    useDisclosure,
} from '@chakra-ui/react'
import { MdAddBox } from 'react-icons/md'
import { NavigationLink } from '../../DrawerNavigation/NavigationLink'
import { GoalsModal } from './Modal'


export function GoalsComponent() {

    const { onOpen, isOpen, onClose } = useDisclosure()


    return (
        <>
            <NavigationLink name="Goals" icon={MdAddBox} onClick={onOpen} />

            <GoalsModal
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    )
}