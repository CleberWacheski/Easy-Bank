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
            px='3%'
            mt='10px'
            gap='7px'
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

        </Flex>
    )
}