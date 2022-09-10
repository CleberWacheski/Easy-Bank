import { Flex, Heading, Table, TableContainer, Tbody, Th, Thead, theme, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { FinancesContext } from "../../context/FinancesContext";
import { TransactionHistoryLineTable } from "./TransactionHistoryLineTable";



export function TransactionHistory() {

    const {data} = useContext(FinancesContext)

    const {Transactions} = data
 
    
    return (
        <Flex
            flexDir='column'
            alignSelf='center'
            py='10px'
        >
            <Heading
                fontSize={18}
                fontWeight='semibold'
            >
                Transactions history
            </Heading>
            <TableContainer
                overflowY='auto'
                overflowX='hidden'
                w='max'
                height={140}
                cursor='pointer'
                css={{
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme.colors.gray[500],
                        borderRadius: '24px',
                    },
                }}
            >
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
                            Transactions.map(({ Date, Name, Amount, Type,id }) => {
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
        </Flex>
    )
}