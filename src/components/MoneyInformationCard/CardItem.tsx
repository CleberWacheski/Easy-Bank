import {  Icon, Text , IconProps, VStack } from "@chakra-ui/react";
import { ElementType } from "react";
import { numberFormater } from "../../utils/numberFomater";

interface CardItemProps extends IconProps {

    icon: ElementType;
    value : number;
    reference : string;
}

export function CardItem({icon,reference,value, ...rest} : CardItemProps) {

    const valueFormated = numberFormater.format(value)

    return (
        <VStack
            align='flex-start'
            mt='10px'
            spacing='7px'
        >
            <Icon 
            as={icon} 
            mb='8px'
            fontSize={28}
            {...rest}
            />
            <Text
            fontSize={24}
            fontWeight='extrabold'
            >
                {valueFormated}
            </Text>
            <Text
            fontSize={18}
            >
                {reference}
            </Text>

        </VStack>
    )
}