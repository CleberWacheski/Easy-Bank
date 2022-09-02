import { Flex, Icon, Text , IconProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface CardItemProps extends IconProps {

    icon: ElementType;
    value : number;
    reference : string;
}

export function CardItem({icon,reference,value, ...rest} : CardItemProps) {
    return (
        <Flex
            flexDirection='column'
            p='16px'
            gap='7px'
        >
            <Icon 
            as={icon} 
            mb='8px'
            fontSize={26}
            {...rest}
            />
            <Text
            fontSize={28}
            fontWeight='extrabold'
            >
                {value}
            </Text>
            <Text
            fontSize={16}
            >
                {reference}
            </Text>

        </Flex>
    )
}