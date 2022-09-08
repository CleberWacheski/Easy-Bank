import { HStack, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { HiCurrencyDollar } from "react-icons/hi";
import { switchColor } from "../../utils/switchColor";
import {numberFormater} from '../../utils/numberFomater'
import { dateFormat } from "../../utils/dateFormat";

interface LineTableProps {
    title: string;
    type: 'Income' | 'Expenses' | 'Savings'
    date: string;
    value: number;
}

export function TransactionHistoryLineTable({ type, title, date, value }: LineTableProps) {

    const color = switchColor(type)
    const Value = (type === 'Income') ? numberFormater.format(value) : `-${numberFormater.format(value)}`
    const dateFormated = dateFormat.format(new Date(date))

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
                </HStack>
            </Td>
            <Td>{dateFormated}</Td>
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