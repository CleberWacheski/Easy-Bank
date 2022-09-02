import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../src/components/Header";
import { MoneyInformationCard } from "../src/components/MoneyInformationCard";
import { NavigationBar } from "../src/components/NavigationBar";


export default function Dashboard() {
    return (
        <Flex>
            <NavigationBar />
            <Flex
                flex='1'
                flexDirection='column'
                align='center'
            >
                <Header />

                <Flex
                    flexDir='column'
                    alignSelf='flex-start'
                    ml='5%'
                >
                    <MoneyInformationCard />

                </Flex>
            </Flex>

        </Flex >

    )
}