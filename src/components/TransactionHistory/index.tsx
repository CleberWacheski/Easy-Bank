import { Flex, Heading, HStack, Icon, Table, TableContainer, Td, Text, Th, Tr } from "@chakra-ui/react";
import { HiCurrencyDollar } from "react-icons/hi";

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
                <Table>
                    <Tr
                        fontSize={14}
                    >
                        <Th>Name</Th>
                        <Th>Type</Th>
                        <Th>Date</Th>
                        <Th>Amount</Th>
                    </Tr>
                    <Tr
                        fontSize={14}
                    >
                        <Td>Hambuguer</Td>
                        <Td>
                            <HStack>
                                <Icon
                                    as={HiCurrencyDollar}
                                    color='red'
                                    fontSize={24}
                                />
                                <Text>Food</Text>
                            </HStack>
                        </Td>
                        <Td>September 03, 2022</Td>
                        <Td
                            fontSize={16}
                            fontWeight='bold'
                            isNumeric
                        >
                            -$50
                        </Td>
                    </Tr>
                    <Tr
                        fontSize={14}
                    >
                        <Td>Shoes</Td>
                        <Td>
                            <HStack>
                                <Icon
                                    as={HiCurrencyDollar}
                                    color='red'
                                    fontSize={24}
                                />
                                <Text>
                                    Shoes
                                </Text>
                            </HStack>
                        </Td>
                        <Td>August 14, 2022</Td>
                        <Td
                            fontSize={16}
                            fontWeight='bold'
                            isNumeric
                        >
                            $250
                        </Td>
                    </Tr>
                </Table>
            </TableContainer>
        </Flex>
    )
}