import { Button, ButtonProps } from "@chakra-ui/react";
import {switchColor} from '../../../utils/switchColor'

interface TransactionButtonModalProps extends ButtonProps{
    Type : string;
    active : string;
}

export function TransactionButtonModal ({Type,active, ...rest} : TransactionButtonModalProps) {

    const ActiveType = (active === Type)

    const color = (ActiveType) ? switchColor(Type) : 'gray'

    return (
        <Button
            color='black'
            p='22px'
            py='28px'
            colorScheme={color}
            textAlign='center'
            {...rest}
        >
            {Type}
        </Button>
    )
}