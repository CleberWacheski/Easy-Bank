import { Box, Flex, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import {useQuery} from 'react-query'
import { useEffect, useState } from "react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { MoneyInformationCard } from "../components/MoneyInformationCard";
import { MyGoalsCard } from "../components/MyGoalsCard";
import { TransactionHistory } from "../components/TransactionHistory";
import { api } from "../services/api";
import { isLessThan1000 } from "../utils/isLessThan1100";

export default function Dashboard() {

    const {data} = useQuery('transactions', async () => {
       const {data} = await api.get('getTransactions')
        return data.data
    })

    console.log(data)

    const [isLess] = useMediaQuery('(max-width: 1000px)')
    const [layout, setLayout] = useState({ columns: 2, rows: 0 })

    useEffect(() => {
        setLayout(isLessThan1000(isLess))
    }, [isLess])


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