import { Button, Flex, Icon, Text,ButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ElementType } from "react";

interface NavigationLinkProps extends ButtonProps {
    name : string;
    icon : ElementType
}

export function NavigationLink({name,icon, ...rest} : NavigationLinkProps) {

    const {asPath} = useRouter()

    let active = ((asPath === `/${name.toLowerCase()}` )|| (asPath=== '/' && name === 'Dashboard'))

    return (
        <Button
            width='80%'
            size='lg'
            display='flex'
            flexDirection='column'
            colorScheme= {(active) ? 'teal' : 'none'}
            {...rest}
        >
            <Flex
                alignSelf='flex-start'
                gap='12px'
                color={(active) ? 'teal.900' : 'gray.100'}
                _hover={{
                    color: (!active) && 'blue.300' 
                }}
            >
                <Icon as={icon} fontSize={22} />
                <Text fontSize={16} mt='3px'>{name}</Text>
            </Flex>
        </Button>
    )
}