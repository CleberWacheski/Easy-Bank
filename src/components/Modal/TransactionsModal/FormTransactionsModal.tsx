import {
    HStack,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Button,
    FormErrorMessage,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { TransactionButtonModal } from './TransactionButtonModal'
import { QueryClient, useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../../services/api'
import { v4 as uuidV4 } from 'uuid'
import { queryClient } from '../../../pages/_app'
import { FinancesContext } from '../../../context/FinancesContext'


const schema = yup.object().shape({
    Name: yup.string().required('O Nome é Obrigatorio'),
    Amount: yup.number().required('O valor é Obrigatorio').
        typeError('Número vazio ou inválido')
})

interface FormPros {
    Name: string;
    Amount: number;
}

interface TransactionProps extends FormPros {
    id: string;
    Type: string;
    Date: Date;
}

export function FormTransactionsModal() {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormPros>({
        resolver: yupResolver(schema)
    })

    const { refetch } = useContext(FinancesContext)

    const mutation = useMutation(async (transaction: TransactionProps) => {
        api.post('addTransaction', {
            Transaction: {
                ...transaction
            }
        })
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('transactions').then(()=> {
                refetch()
            })
        }
    })

    const [type, setType] = useState('')

    const handleCreateNewTransaction: SubmitHandler<FormPros> = async (value, event) => {
        const data = {
            id: uuidV4(),
            Name: value.Name,
            Amount: value.Amount,
            Type: type,
            Date: new Date()
        }

        mutation.mutateAsync(data)
        reset()
    
    }

    const FormErrors = {
        Name: (errors.Name?.message) ? errors.Name.message : '',
        Amount: (errors.Amount?.message) ? errors.Amount.message : ''
    }


    return (
        <FormControl
            p='18px'
            as='form'
            onSubmit={handleSubmit(handleCreateNewTransaction)}
            isInvalid={!!FormErrors.Name || !!FormErrors.Amount}
        >
            <VStack
                align='flex-start'
            >
                <FormLabel>Name</FormLabel>
                <Input
                    colorScheme='teal'
                    {...register('Name')}
                />
                <FormErrorMessage>{FormErrors.Name}</FormErrorMessage>
                <FormLabel>Amount</FormLabel>
                <Input
                    type='number'
                    {...register('Amount')}
                />
                <FormErrorMessage>{FormErrors.Amount}</FormErrorMessage>
                <HStack
                    py='15px'
                >
                    <TransactionButtonModal
                        Type='Income'
                        active={type}
                        onClick={() => setType('Income')}

                    />
                    <TransactionButtonModal
                        Type='Expenses'
                        active={type}
                        onClick={() => setType('Expenses')}
                    />
                    <TransactionButtonModal
                        Type='Savings'
                        active={type}
                        onClick={() => setType('Savings')}
                    />
                </HStack>
                <Button
                    colorScheme='teal'
                    type='submit'
                    alignSelf='flex-end'
                    isLoading={isSubmitting}
                >
                    Add Transaction
                </Button>
            </VStack>
        </FormControl>
    )
}