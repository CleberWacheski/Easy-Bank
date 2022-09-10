import { Button, Flex, Heading, HStack, Icon, Input, theme, useDisclosure } from "@chakra-ui/react";
import { GoalsCardItem } from "./GoalsCardItem";
import { IconCategoryGoal } from "../../utils/IconCategoryGoal";
import { useContext, useMemo, useState } from "react";
import { FinancesContext } from "../../context/FinancesContext";
import { progressCalculation } from "../../utils/progressCalculation";
import { GoalsModal } from "../Modal/GoalsModal/Modal";
import { FcSearch } from 'react-icons/fc'
import { BiSearch } from "react-icons/bi";

export function MyGoalsCard() {

    const { isOpen, onClose, onOpen } = useDisclosure()

    const { data } = useContext(FinancesContext)
    const { Goals, Transactions } = data

    const [seach, setSeach] = useState('')

    const SumarySavings = Transactions.reduce((acc, item) => {
        if (item.Type === 'Savings') {
            acc += item.Amount
        }
        return acc
    }, 0)

    const goalsFiltred = useMemo(() => {

        return Goals.filter(({ Name }) => Name.toLowerCase().startsWith(seach.toLowerCase()))
            
    }, [seach,Goals])

    return (
        <Flex
            flexDir='column'
            align='center'
            justify='center'
        >
            <HStack>
                <Input
                    placeholder="Seach your goals"
                    maxW='230px'
                    onChange={(e) => setSeach(e.target.value)}
                    value={seach}
                    colorScheme='teal'
                    variant='filled'
                />
                <Icon
                    fontSize={34}
                    as={FcSearch}
                >
                    Send
                </Icon>
            </HStack>
            <Flex
                mt='15px'
                w='75%'
                p='20px'
                justifyContent='space-between'
                align='center'
            >
                <Heading
                    fontSize={19}
                    fontWeight='semibold'
                >
                    My Goals
                </Heading>
                <Button
                    colorScheme='teal'
                    px='20px'
                    onClick={onOpen}
                >
                    Add
                </Button>
                <GoalsModal
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </Flex>
            <Flex
                flexDir='column'
                w='60%'
                gap='8px'
                maxHeight='300px'
                cursor='pointer'
                overflow='auto'
                px='8px'
                css={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme.colors.blue[300],
                        borderRadius: '24px',
                    },
                }}
            >

                {
                    goalsFiltred.map((goal) => {

                        return (
                            <GoalsCardItem
                                key={goal.id}
                                id={goal.id}
                                icon={IconCategoryGoal(goal.category)}
                                name={goal.Name}
                                progressValue={(progressCalculation(SumarySavings, goal.Amount))}
                            />
                        )
                    })
                }

            </Flex>

        </Flex>
    )
}