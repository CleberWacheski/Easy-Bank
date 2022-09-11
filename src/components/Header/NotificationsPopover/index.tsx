import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    IconButton,
    Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

import { FinancesContext } from "../../../context/FinancesContext";
import { progressCalculation } from "../../../utils/progressCalculation";

export function NotificationsPopover() {


    const { data: { Goals, Transactions } } = useContext(FinancesContext)

    const SumarySavings = Transactions.reduce((acc, item) => {
        if (item.Type === 'Savings') {
            acc += item.Amount
        }
        return acc
    }, 0)

    const MessagePopover = () => {

        return (
            (Goals.every((goal) => goal.Amount > SumarySavings) || !Goals[0].Amount) &&

            (
                <Text>
                   Sorry 😔, Nothing here...
                </Text>
            )
        )
    }

    return (
        <Popover>
            <PopoverTrigger>
                <IconButton
                    icon={<IoMdNotificationsOutline />}
                    aria-label='Open Notifications'
                    colorScheme='teal'
                    borderRadius='full'
                    fontSize={28}
                />

            </PopoverTrigger>
            <PopoverContent
                color='black' bg='blue.200' borderColor='blue.200' fontWeight='hairline'
            >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody
                    mt='10px'
                >
                    {Goals.map((goal) => {

                        return (
                            (progressCalculation(SumarySavings, goal.Amount) === 100) &&
                            (
                                <Text
                                    key={goal.id}
                                    py='8px'
                                    borderBottom='1px solid gray'
                                >
                                    Congratulations 👏👏, you can purchase your goal <strong>{goal.Name}</strong> for {goal.Amount}R$
                                </Text>
                            )
                        )
                    })}
                    <MessagePopover/>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
