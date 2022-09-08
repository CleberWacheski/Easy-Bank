import { Box, Flex, SimpleGrid, Spinner, useMediaQuery } from "@chakra-ui/react";
import { useQuery } from 'react-query'
import { useContext, useEffect, useState } from "react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { MoneyInformationCard } from "../components/MoneyInformationCard";
import { MyGoalsCard } from "../components/MyGoalsCard";
import { TransactionHistory } from "../components/TransactionHistory";
import { api } from "../services/api";
import { isLessThan1000 } from "../utils/isLessThan1100";
import { FinancesContext } from "../context/FinancesContext";


export default function Dashboard() {

    const {isLoading,isFetching} = useContext(FinancesContext)


    const [isLess] = useMediaQuery('(max-width: 1000px)')
    const [layout, setLayout] = useState({ columns: 2, rows: 0 })

    useEffect(() => {
        setLayout(isLessThan1000(isLess))
    }, [isLess])


    return (
        <Box>
            <Header />
            {(isLoading || isFetching) ?
                <Flex
                    h='100vh'
                    // bg='teal'
                    justifyContent='center'
                    align='center'
                >
                    <Spinner
                        thickness='8px'
                        speed='0.60s'
                        emptyColor='gray.200'
                        color='teal.600'
                        size='lg'

                    />
                </Flex>
                :
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
                        <TransactionHistory  />


                    </Flex>
                    <Box
                        px='30px'
                    >
                        <MyGoalsCard />

                    </Box>
                </SimpleGrid>

            }
        </Box>
    )
}