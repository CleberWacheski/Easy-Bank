import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { CardCredit } from "../src/components/CardCredit";
import { Header } from "../src/components/Header";
import { MoneyInformationCard } from "../src/components/MoneyInformationCard";
import { NavigationBar } from "../src/components/NavigationBar";
import { TransactionHistory } from "../src/components/TransactionHistory";


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
                <SimpleGrid
                     columns={2}
                     spacing={20}
                >
                    <Flex
                        flexDir='column'
                        alignSelf='flex-start'
                        ml='5%'
                    >
                        <MoneyInformationCard />
                        <TransactionHistory />

                    </Flex>
                    <Flex
                        flexDir='column'
                        alignSelf='flex-start'
                        flex='1'
                        mr='5%'
                    >
                        <CardCredit/>

                    </Flex>
                </SimpleGrid>
            </Flex>

        </Flex >

    )
}