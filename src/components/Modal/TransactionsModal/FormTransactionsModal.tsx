import {
    HStack,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Button,
    FormErrorMessage,
    Text,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { TransactionButtonModal } from './TransactionButtonModal'
import { useMutation } from 'react-query'
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

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormPros>({
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
            queryClient.invalidateQueries('finances').then(() => {
                refetch()
            })
        }
    })

    const [type, setType] = useState('')
    const [typeError, setTypeError] = useState('')

    const handleCreateNewTransaction: SubmitHandler<FormPros> = async (value, event) => {
        if (!!type) {

            const data = {
                id: uuidV4(),
                Name: value.Name,
                Amount: value.Amount,
                Type: type,
                Date: new Date()
            }

           
            reset()
            setTypeError('')
            await mutation.mutateAsync(data)
        }
        else {
            setTypeError('Select Type')
        }

    }

    const FormErrors = {
        Name: (errors.Name?.message) ? errors.Name.message : '',
        Amount: (errors.Amount?.message) ? errors.Amount.message : ''
    }


    return (
        <FormControl
            as='form'
            onSubmit={handleSubmit(handleCreateNewTransaction)}
            isInvalid={!!FormErrors.Name || !!FormErrors.Amount}
        >
            <VStack
                align='flex-start'
            >
                <FormLabel
                    fontWeight='extrabold'
                >
                    Name
                </FormLabel>
                <Input
                    type='text'
                    placeholder='Ex : Playstation 4'
                    variant='filled'
                    {...register('Name')}
                />
                <FormErrorMessage>{FormErrors.Name}</FormErrorMessage>
                <FormLabel
                    fontWeight='extrabold'
                >
                    Amount
                </FormLabel>
                <Input
                    type='number'
                    placeholder='Ex : 2099'
                    variant='filled'
                    {...register('Amount')}
                />
                <FormErrorMessage>{FormErrors.Amount}</FormErrorMessage>
                <Text
                    fontSize={14}
                    color='red'
                    pt='15px'
                >{typeError}</Text>
                <HStack
                    pb='15px'
                >
                    <TransactionButtonModal
                        size='sm'
                        Type='Income'
                        active={type}
                        onClick={() => setType('Income')}

                    />
                    <TransactionButtonModal
                        size='sm'
                        Type='Expenses'
                        active={type}
                        onClick={() => setType('Expenses')}
                    />
                    <TransactionButtonModal
                        size='sm'
                        Type='Savings'
                        active={type}
                        onClick={() => setType('Savings')}
                    />
                </HStack>

                <Button
                    colorScheme='teal'
                    type='submit'
                    alignSelf='flex-end'
                    isLoading={mutation.isLoading}
                >
                    Add Transaction
                </Button>
            </VStack>
        </FormControl>
    )
}