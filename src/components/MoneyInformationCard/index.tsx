import { Flex } from "@chakra-ui/react";
import { CardItem } from "./CardItem";
import { HiCurrencyDollar } from 'react-icons/hi'
import { RiMoneyDollarBoxFill } from 'react-icons/ri'

export function MoneyInformationCard() {
    return (
        <Flex
            gap='45px'
            alignSelf='center'
        >
            <CardItem 
                reference="Balance"
                icon={HiCurrencyDollar}
                value={3596}
                color='gray.600'
            />
            <CardItem 
                reference="Income"
                icon={HiCurrencyDollar}
                value={421}
                color='green.500'
            />
            <CardItem 
                reference="Expenses"
                icon={HiCurrencyDollar}
                value={164}
                color='red.500'
            />
            <CardItem 
                reference="Savings"
                icon={RiMoneyDollarBoxFill}
                value={257}
                color='blue.500'
            />
        </Flex>
    )
}