import {
    FormControl,
    FormLabel,
    Input,
    VStack,
    Select,
    Button,
    FormErrorMessage,
} from '@chakra-ui/react'
import { useForm ,SubmitHandler} from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

interface FormGoalsProps {
    Name : string;
    Amount : number
}

const schema = yup.object().shape({
    Name: yup.string().required("O Nome é Obrigatorio"),
    Amount: yup.number().required("O Valor é Obrigatorio").typeError('Número vazio ou inválido')
})

export function FormGoals() {
    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<FormGoalsProps>({
        resolver: yupResolver(schema)
    })
    const [category, setCategory] = useState('')

    const handleNewCreateGoals : SubmitHandler<FormGoalsProps> = async (value,event) =>  {
        const data = {
            name : value.Name,
            amount : value.Amount,
            category : category
        }

        await new Promise(resolve=> setTimeout(resolve,1500))
        console.log(data)

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
            onSubmit={handleSubmit(handleNewCreateGoals)}
            isInvalid={!!FormErrors.Name || !!FormErrors.Amount}
        >
            <VStack
                align='flex-start'
                spacing='10px'
            >
                <FormLabel>Name</FormLabel>
                <Input
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
                    placeholder='Select Category'
                    
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                >
                    <option>Computer</option>
                    <option>Car</option>
                    <option>Any</option>
                </Select>
                <Button
                    colorScheme='teal'
                    type='submit'
                    alignSelf='flex-end'
                    isLoading={isSubmitting}
                >
                    Add Goal
                </Button>
            </VStack>
        </FormControl>
    )
}