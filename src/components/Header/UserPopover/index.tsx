import {
    Avatar,
    HStack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Icon,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";

import { IoLogOut } from "react-icons/io5";
import { UserContext } from "../../../context/UserContext";

export function UserPopover() {


    const { name, photo, email } = useContext(UserContext)

    return (
        <Popover>
            <PopoverTrigger>
                <Avatar
                    name={name}
                    src={photo}
                    size='md'
                    cursor='pointer'
                />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader
                    fontWeight='medium'
                    fontStyle='italic'
                >
                    {email}
                </PopoverHeader>
                <PopoverBody>
                    <Link href={'/'}>
                        <HStack
                            cursor='pointer'
                            _hover={{
                                color: 'teal'
                            }}
                        >

                            <Icon
                                fontSize={25}
                                name='Logout'
                                as={IoLogOut}
                            />
                            <Text
                                fontSize={18}
                                fontWeight='medium'
                            >
                                Logout
                            </Text>
                        </HStack>
                    </Link>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}