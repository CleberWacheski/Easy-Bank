import { Flex, Heading, HStack, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { HiCurrencyDollar } from "react-icons/hi";
import { TransactionHistoryLineTable } from "./TransactionHistoryLineTable";

export function TransactionHistory() {
    return (
        <Flex
            flexDir='column'
            gap='16px'
            align='flex-start'
            w='max-content'
        >
            <Heading
                fontSize={20}
                fontWeight='semibold'
            >
                Transaction History
            </Heading>
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