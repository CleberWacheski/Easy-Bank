import { Flex, Icon, Text , IconProps, VStack } from "@chakra-ui/react";
import { ElementType } from "react";

interface CardItemProps extends IconProps {

    icon: ElementType;
    value : number;
    reference : string;
}

export function CardItem({icon,reference,value, ...rest} : CardItemProps) {
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
            fontSize={30}
            fontWeight='extrabold'
            >
                {value}
            </Text>
            <Text
            fontSize={18}
            >
                {reference}
            </Text>

        </VStack>
    )
}