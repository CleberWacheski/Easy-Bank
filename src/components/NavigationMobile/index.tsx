import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import { GoalsComponent } from '../Modal/GoalsModal'
import { TransactionComponent } from '../Modal/TransactionsModal'

export function NavigationMobile() {
    return (
        <Menu

        >
            <MenuButton
                colorScheme='teal'
                aria-label='Open Menu Navigation'
                as={IconButton}
                icon={<HamburgerIcon />}
                color='white'
                fontSize={22}
                fontWeight='extrabold'
            />
            <MenuList
                border='none'
            >
                <MenuItem>
                    <TransactionComponent />
                </MenuItem>
                <MenuItem>
                    <GoalsComponent />
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

