import { CloseButton, Flex, HStack, Icon, Progress, Stack, Text, VStack } from "@chakra-ui/react";
import { ElementType, useContext } from "react";
import { useMutation } from "react-query";
import { FinancesContext } from "../../context/FinancesContext";
import { queryClient } from "../../pages/_app";
import { api } from "../../services/api";


interface GoalsCardItemProps {
    icon: ElementType;
    name: string;
    progressValue: number
    id : string;
}


export function GoalsCardItem({ icon, name, progressValue,id }: GoalsCardItemProps) {

    const {refetch} = useContext(FinancesContext)

    const mutation = useMutation(async (id : string ) => {
        api.post('removeDocument', {
            deleteRef: {
                id,
                colletion: 'goal'
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
        <HStack
        >
            <CloseButton
                size='sm'
                bg='red.500'
                color='white'
                borderRadius='full'
                _hover={{
                    bg: 'red.300',
                }}
                onClick={()=> mutation.mutateAsync(id)}
            />
            <Flex
                bg='blue.200'
                w='100%'
                borderRadius='10px'
                p='10px'
                gap='10px'
                _hover={{
                    bg: 'blue.300',
                }}

            >
                <Icon
                    fontSize={44}
                    color='gray.500'
                    as={icon}
                />

                <Stack
                    w='100%'
                >
                    <Flex
                        align='center'
                        justify='space-between'
                        px='2px'
                    >
                        <Text
                            fontSize={14}
                            fontWeight='medium'
                        >
                            {name}
                        </Text>
                        <Text
                            fontWeight='bold'
                            fontSize={16}
                        >
                            {progressValue}%
                        </Text>
                    </Flex>
                    <Progress
                        value={progressValue}
                        hasStripe
                        colorScheme='blue'
                        size='md'
                    />
                </Stack>
            </Flex>
        </HStack>
    )
}