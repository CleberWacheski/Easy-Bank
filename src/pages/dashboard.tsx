import { Box, Flex, SimpleGrid, Spinner, useMediaQuery } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { useContext, useEffect } from "react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { MoneyInformationCard } from "../components/MoneyInformationCard";
import { MyGoalsCard } from "../components/MyGoalsCard";
import { TransactionHistory } from "../components/TransactionHistory";
import { FinancesContext } from "../context/FinancesContext";
import { getDataFinances, useFinances } from "../hooks/useFinances";
import { authOptions } from "./api/auth/[...nextauth]";


export default function Dashboard() {

    const { isLoading } = useContext(FinancesContext)
    const [isLess] = useMediaQuery('(max-width: 1100px)')

    return (
        <Box>
            <Header />
            {(isLoading) ?
                <Flex
                    flex='1'
                    bg='teal'
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
                    columns={isLess ? 0 : 2}
                    row={isLess ? 2 : 0}
                    px='4%'
                    pb={(isLess) ? '4%' : 0}
                    pt='100px'
                >
                    <Flex
                        flexDir='column'
                    >
                        <MoneyInformationCard />
                        <ChartComponent />
                        <TransactionHistory />


                    </Flex>
                    <Box
                        p='35px'
                    >
                        <MyGoalsCard />

                    </Box>
                </SimpleGrid>

            }
        </Box>
    )
}
