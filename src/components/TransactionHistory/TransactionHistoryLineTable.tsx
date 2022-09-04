import { HStack, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { HiCurrencyDollar } from "react-icons/hi";
import { switchColor } from "../../utils/switchColor";
import {numberFormater} from '../../utils/numberFomater'

interface LineTableProps {
    title: string;
    type: 'Income' | 'Expenses' | 'Savings'
    category: string;
    date: string;
    value: number;
}

export function TransactionHistoryLineTable({ type, title, category, date, value }: LineTableProps) {

    const color = switchColor(type)
    const Value = (type === 'Income') ? numberFormater.format(value) : `-${numberFormater.format(value)}`

    return (
        <Tr
            fontSize={14}
        >
            <Td>{title}</Td>
            <Td>
                <HStack>
                    <Icon
                        as={HiCurrencyDollar}
                        color={color}
                        fontSize={24}
                    />
                    <Text>{category}</Text>
                </HStack>
            </Td>
            <Td>{date}</Td>
            <Td
                fontSize={16}
                fontWeight='bold'
                isNumeric
            >
                {Value}
            </Td>
        </Tr>
    )
}