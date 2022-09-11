import { Flex, Heading, Table, TableContainer, Tbody, Th, Thead, theme, Tr, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FinancesContext } from "../../context/FinancesContext";
import { TransactionHistoryLineTable } from "./TransactionHistoryLineTable";



export function TransactionHistory() {

    const { data } = useContext(FinancesContext)

    const { Transactions } = data


    return (
        <VStack
            mt='10px'
            w='max'
            height={180}
            overflowY='scroll'
        >
            <Heading
                fontSize={18}
                fontWeight='semibold'
            >
                Transactions history
            </Heading>
            <TableContainer>
                <Table
                    size='sm'
                >
                    <Thead>
                        <Tr
                            fontSize={16}
                        >
                            <Th>Name</Th>
                            <Th>Type</Th>
                            <Th>Date</Th>
                            <Th>Amount</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Transactions.map(({ Date, Name, Amount, Type, id }) => {
                                return (
                                    <TransactionHistoryLineTable
                                        key={id}
                                        title={Name}
                                        date={Date}
                                        type={Type}
                                        id={id}
                                        value={Amount}
                                    />
                                )
                            })
                        }

                    </Tbody>
                </Table>
            </TableContainer>
        </VStack>
    )
}