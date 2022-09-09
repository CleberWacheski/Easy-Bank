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
import { useContext, useState } from 'react'
import {v4 as uiidV4} from 'uuid'
import { useMutation } from 'react-query'
import { api } from '../../../services/api'
import { queryClient } from '../../../pages/_app'
import { FinancesContext } from '../../../context/FinancesContext'

interface FormGoalsProps {
    Name : string;
    Amount : number
}

interface GoalsProps extends FormGoalsProps {
    id : string;
    category : string;
}

const schema = yup.object().shape({
    Name: yup.string().required("O Nome é Obrigatorio"),
    Amount: yup.number().required("O Valor é Obrigatorio").typeError('Número vazio ou inválido')
})

export function FormGoals() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormGoalsProps>({
        resolver: yupResolver(schema)
    })
    const [category, setCategory] = useState('')
    const {refetch} = useContext(FinancesContext)

    const mutation = useMutation(async(goal : GoalsProps)=> {
        api.post('addGoals', {
            goal : {
                ...goal
            }
        })
    },{
        onSuccess: ()=> {
            queryClient.invalidateQueries('finances').then(()=> {
                refetch()
            })
        }
    })

    const handleNewCreateGoals : SubmitHandler<FormGoalsProps> = async (value,event) =>  {

        const data : GoalsProps = {
            id : uiidV4(),
            Name : value.Name,
            Amount : value.Amount,
            category : category
        }

        mutation.mutateAsync(data)
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
                    <option>Travel</option>
                    <option>Game</option>
                    <option>Leisure</option>
                    <option>Professional</option>
                    <option>Personal</option>
                    <option>Other</option>
                </Select>
                <Button
                    colorScheme='teal'
                    type='submit'
                    alignSelf='flex-end'
                    isLoading={mutation.isLoading}
                >
                    Add Goal
                </Button>
            </VStack>
        </FormControl>
    )
}