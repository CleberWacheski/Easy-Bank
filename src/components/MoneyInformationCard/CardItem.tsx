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
            spacing='4px'
        >
            <Icon 
            as={icon} 
            mb='8px'
            fontSize={26}
            {...rest}
            />
            <Text
            fontSize={22}
            fontWeight='extrabold'
            >
                {valueFormated}
            </Text>
            <Text
            fontSize={16}
            >
                {reference}
            </Text>

        </VStack>
    )
}