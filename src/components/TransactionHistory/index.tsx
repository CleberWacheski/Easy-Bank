import { Flex, Heading, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { FinancesContext } from "../../context/FinancesContext";
import { TransactionHistoryLineTable } from "./TransactionHistoryLineTable";



export function TransactionHistory() {

    const {data} = useContext(FinancesContext)
 
    
    return (
        <Flex
            flexDir='column'
            alignSelf='center'
            py='20px'
            w='max-content'
        >
            <Heading
                fontSize={20}
                fontWeight='semibold'
            >
                Transactions history
            </Heading>
            <TableContainer
                maxHeight={200}
                overflowY='auto'
            >
                <Table
                    size='sm'
                >
                    <Thead>
                        <Tr
                            fontSize={14}
                        >
                            <Th>Name</Th>
                            <Th>Type</Th>
                            <Th>Date</Th>
                            <Th>Amount</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                         {
                            data.map(({ Date, Name, Amount, Type,id }) => {
                                return (
                                    <TransactionHistoryLineTable
                                        key={id}
                                        title={Name}
                                        date={Date}
                                        type={Type}
                                        value={Amount}
                                    />
                                )
                            })
                        }

                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}