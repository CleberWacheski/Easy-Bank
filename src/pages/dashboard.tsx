import { Box, Flex, SimpleGrid, Spinner, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ChartComponent } from "../components/ChartComponent";
import { Header } from "../components/Header";
import { MoneyInformationCard } from "../components/MoneyInformationCard";
import { MyGoalsCard } from "../components/MyGoalsCard";
import { TransactionHistory } from "../components/TransactionHistory";
import { isLessThan1200 } from "../utils/isLessThan1200";
import { FinancesContext } from "../context/FinancesContext";


export default function Dashboard() {

    const {isLoading} = useContext(FinancesContext)
    const [isLess] = useMediaQuery('(max-width: 1100px)')

    return (
         <Box>
             <Header />
             {(isLoading ) ?
                 <Flex
                     h='100vh'
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
                     px='2%'
                     pb={(isLess) ? '4%' : 0}
                     pt='100px'
                     
                 >
                     <Flex
                         flexDir='column'
                     >
                         <MoneyInformationCard />
                         <ChartComponent />
                         <TransactionHistory  />


                     </Flex>
                     <Box
                         p='30px'
                     >
                         <MyGoalsCard />

                     </Box>
                 </SimpleGrid>

             }
         </Box>
    )
}