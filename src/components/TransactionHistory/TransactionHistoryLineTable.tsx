import { CloseButton, HStack, Icon, Td, Tr } from "@chakra-ui/react";
import { HiCurrencyDollar } from "react-icons/hi";
import { switchColor } from "../../utils/switchColor";
import { numberFormater } from '../../utils/numberFomater'
import { dateFormat } from "../../utils/dateFormat";
import { useMutation } from "react-query";
import { queryClient } from "../../pages/_app";
import { useContext } from "react";
import { FinancesContext } from "../../context/FinancesContext";
import { api } from "../../services/api";

interface LineTableProps {
    title: string;
    type: 'Income' | 'Expenses' | 'Savings'
    date: string;
    value: number;
    id: string;
}

export function TransactionHistoryLineTable({ type, title, date, value, id }: LineTableProps) {

    const { refetch } = useContext(FinancesContext)
    const color = switchColor(type)
    const Value = (type === 'Expenses') ? `-${numberFormater.format(value)}` : numberFormater.format(value)
    const dateFormated = dateFormat.format(new Date(date))

    const handleRemove = useMutation(async (id: string) => {
        api.post('removeDocument', {
            deleteRef: {
                id,
                colletion: 'transaction'
            }
        })
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('finances').then(() => {
                new Promise((res, rej) => setTimeout(res, 500))
                    .then(() => {
                        refetch()
                    })
            })
        }
    })

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
                        fontSize={23}
                    />
                </HStack>
            </Td>
            <Td>{dateFormated}</Td>
            <Td
                fontSize={15}
                fontWeight='bold'
                isNumeric
            >
                {Value}
            </Td>
            <Td>
                <CloseButton
                    onClick={() => handleRemove.mutateAsync(id)}
                    title="Delete Transaction"
                    bg='red.800'
                    color='white'
                    size='sm'
                    _hover={{
                        color: 'red.900',
                        bg: 'red.300'
                    }}
                />
            </Td>
        </Tr>
    )
}