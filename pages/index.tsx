import { Flex, SimpleGrid, useBreakpointValue, useMediaQuery, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChartComponent } from "../src/components/ChartComponent";
import { Header } from "../src/components/Header";
import { MoneyInformationCard } from "../src/components/MoneyInformationCard";
import { MyGoalsCard } from "../src/components/MyGoalsCard";
import { NavigationBar } from "../src/components/NavigationBar";
import { TransactionHistory } from "../src/components/TransactionHistory";
import { isLessThan1100 } from "../src/utils/isLessThan1100";

export default function Dashboard() {

    const [isLess] = useMediaQuery('(max-width: 1100px)')
    const [layout,setLayout] = useState({ columns : 2 , rows : 0})

    useEffect(()=> {
        setLayout(isLessThan1100(isLess))
    },[isLess])
    

    return (
        <Flex>
            { (!isLess) &&
            <NavigationBar />}
            <Flex
                flex='1'
                flexDirection='column'
                align='center'
            >
                <Header />

                <SimpleGrid
                    columns={layout.columns}
                    row={layout.rows}
                    spacing={20}
                    px='2%'
                >
                    <Flex
                        flexDir='column'
                        alignSelf='flex-start'
                    >
                        <MoneyInformationCard />
                        <ChartComponent />
                        <TransactionHistory />

                    </Flex>
                    <Flex
                        flexDir='column'
                        pt='8%'
                    >

                        <MyGoalsCard />

                    </Flex>
                </SimpleGrid>

            </Flex>

        </Flex >

    )
}