import { Flex, useMediaQuery } from "@chakra-ui/react";
import { CardItem } from "./CardItem";
import { HiCurrencyDollar } from 'react-icons/hi'
import { RiMoneyDollarBoxFill } from 'react-icons/ri'
import { useContext } from "react";
import { FinancesContext } from "../../context/FinancesContext";




export function MoneyInformationCard() {

    const {data} = useContext(FinancesContext)
    const [isLess] = useMediaQuery('(max-width: 1100px)')
    

    const {Transactions} = data

    const financeInformation = Transactions.reduce((acc, transaction) => {
        if (transaction.Type === 'Expenses') {
            acc.Expenses += transaction.Amount
            acc.Balance -= transaction.Amount
        }
        else if (transaction.Type === 'Income') {
            acc.Income += transaction.Amount
            acc.Balance += transaction.Amount
        }
        else if (transaction.Type === 'Savings') {
            acc.Savings += transaction.Amount
        }

        return acc
    }, {
        Balance: 0,
        Income: 0,
        Expenses: 0,
        Savings: 0
    })


    return (
        <Flex
            gap='20px'
            alignSelf='center'
            justifyContent='center'   
            flexWrap='wrap'
            pr='20px'
            pl='10px'
        >
            <CardItem
                reference="Balance"
                icon={HiCurrencyDollar}
                value={financeInformation.Balance}
                color='gray.600'
            />
            <CardItem
                reference="Income"
                icon={HiCurrencyDollar}
                value={financeInformation.Income}
                color='green.500'
            />
            <CardItem
                reference="Expenses"
                icon={HiCurrencyDollar}
                value={financeInformation.Expenses}
                color='red.500'
            />
            <CardItem
                reference="Savings"
                icon={RiMoneyDollarBoxFill}
                value={financeInformation.Savings}
                color='blue.500'
            />
        </Flex>
    )
}