import { Flex, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { NavigationLink } from "./NavigationLink";

import { HiHome } from 'react-icons/hi'
import { IoLogOut } from 'react-icons/io5'
import { MdAddBox } from "react-icons/md";
import { TransactionComponent } from "../Modal/TransactionsModal";
import { GoalsComponent } from "../Modal/GoalsModal";

export function NavigationBar() {


    return (
        <Flex
            w={250}
            bg='teal.900'
            h='100vh'
            align='flex-start'
            justify='flex-start'
            flexDirection='column'
        >
            <HStack mt='54px' spacing='8px' ml='15%'>
                <Image
                    src='/Logo.svg'
                    alt="Logo do easy bank"
                    width={40}
                    height={40}
                />
                <Text
                    color='gray.100'
                    fontSize={22}
                    fontWeight='semibold'
                    letterSpacing='tighter'
                >
                    easy bank
                </Text>
            </HStack>

            <VStack
                width='100%'
                mt='32px'
                spacing='16px'
            >
                <NavigationLink name='Dashboard' icon={HiHome} />
                <TransactionComponent/>
                <GoalsComponent/>

            </VStack>
            <NavigationLink
                flex='1'
                name='Logout'
                icon={IoLogOut}
                justifySelf='flex-end'
                alignSelf='center'
            />
        </Flex>
    )
}