import { Box, Flex, HStack, SimpleGrid, useBreakpointValue, useMediaQuery, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { MoneyInformationCard } from "../components/MoneyInformationCard";
import { MyGoalsCard } from "../components/MyGoalsCard";
import { TransactionHistory } from "../components/TransactionHistory";
import { isLessThan1000 } from "../utils/isLessThan1100";
import { query as q } from "faunadb";
import { client } from "../services/faunaClient";

export default function Dashboard() {

    const [isLess] = useMediaQuery('(max-width: 1000px)')
    const [layout, setLayout] = useState({ columns: 2, rows: 0 })

    useEffect(() => {
        setLayout(isLessThan1000(isLess))
    }, [isLess])

    useEffect(()=> {
        
        var createP = client.query(
            q.Create(
              q.Collection('test'),
              { data: { testField: 'testValue' } }
            )
          )

    },[])


    return (
        <Box>
            <Header />
            <SimpleGrid
                columns={layout.columns}
                row={layout.rows}
                px='2%'
                pt='95px'
            >
                <Flex
                    flexDir='column'
                >
                    <MoneyInformationCard />
                    <ChartComponent />
                    <TransactionHistory />
                    
                    

                </Flex>
                <Box
                    px='30px'
                >
                    <MyGoalsCard />
                    
                </Box>
            </SimpleGrid>
        </Box>
    )
}