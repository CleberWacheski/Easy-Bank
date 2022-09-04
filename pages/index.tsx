import { Flex, SimpleGrid } from "@chakra-ui/react";
import { ChartComponent } from "../src/components/ChartComponent";
import { Header } from "../src/components/Header";
import { MoneyInformationCard } from "../src/components/MoneyInformationCard";
import { MyGoalsCard } from "../src/components/MyGoalsCard";
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
                    px='3%'
                >
                    <Flex
                        flexDir='column'
                        alignSelf='flex-start'
                    >
                        <MoneyInformationCard />
                        <ChartComponent/>
                        <TransactionHistory />

                    </Flex>
                    <Flex
                        flexDir='column'
                        // justifySelf='flex-end'
                        pt='4%'
                    >
                        <MyGoalsCard />

                    </Flex>
                </SimpleGrid>
            </Flex>

        </Flex >

    )
}