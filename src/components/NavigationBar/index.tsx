import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { NavigationLink } from "./NavigationLink";

import { HiHome, HiCreditCard } from 'react-icons/hi'
import { RiMoneyDollarBoxFill } from 'react-icons/ri'
import { MdPayments, MdInsights } from 'react-icons/md'
import { IoSettingsSharp, IoLogOut } from 'react-icons/io5'

export function NavigationBar() {
    return (
        <Flex
            w={287}
            bg='teal.900'
            h='100vh'
            align='flex-start'
            justify='flex-start'
            flexDirection='column'
        >
            <HStack mt='54px' spacing='8px' ml='42px'>
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
                <NavigationLink name="Transactions" icon={RiMoneyDollarBoxFill} />
                <NavigationLink name='Payment' icon={MdPayments} />
                <NavigationLink name='Card' icon={HiCreditCard} />
                <NavigationLink name='Insights' icon={MdInsights} />
                <NavigationLink name='Settings' icon={IoSettingsSharp} />

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