import {
    HStack,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Select,
    Button,
    FormErrorMessage,
} from '@chakra-ui/react'
import { useState } from 'react'
import { TransactionButtonModal } from './TransactionButtonModal'

import { useForm,SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const schema = yup.object().shape({
    Name: yup.string().required('O Nome é Obrigatorio'),
    Amount: yup.number().required('O valor é Obrigatorio').
    typeError('Número vazio ou inválido')
})

interface FormPros {
    Name : string;
    Amount : number;
}

export function FormTransactionsModal() {

    const { register, handleSubmit,reset, formState: { errors,isSubmitting } } = useForm<FormPros>({
        resolver: yupResolver(schema)
    })

    const [type, setType] = useState('')
    const [category,setCategory] = useState('')

    const handleCreateNewTransaction : SubmitHandler<FormPros> = async (value,event) => {
        const data = {
            name : value.Name,
            amount : value.Amount,
            category,
            type : type
        }
        await new Promise(resolve=> setTimeout(resolve,1500))
        reset()


    }

    const FormErrors = {
        Name : (errors.Name?.message) ? errors.Name.message : '',
        Amount : (errors.Amount?.message) ? errors.Amount.message : ''
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
                <FormLabel>Category</FormLabel>
                <Select 
                placeholder='Select Type'
                onChange={e => setCategory(e.target.value)}
                value={category}
                >
                    <option>Food</option>
                    <option>Shopping</option>
                    <option>Any</option>
                </Select>
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