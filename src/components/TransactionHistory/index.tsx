import { Flex,Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { TransactionHistoryLineTable } from "./TransactionHistoryLineTable";

export function TransactionHistory() {


    return (
        <Flex
            flexDir='column'
            align='flex-start'
            mt='25px'
            w='max-content'
        >
            <TableContainer>
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
                        <TransactionHistoryLineTable
                            title="Hambuguer"
                            category="Food"
                            date="September 03, 2022"
                            type="Expenses"
                            value={50}
                        />
                        <TransactionHistoryLineTable
                            title="Shoes"
                            category="Shoes"
                            date="August 14, 2022"
                            type="Expenses"
                            value={250}
                        />
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}