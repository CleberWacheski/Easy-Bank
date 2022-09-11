import { AddIcon } from "@chakra-ui/icons";
import { Button, Icon, Text, ButtonProps, HStack, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ElementType } from "react";

interface NavigationLinkProps extends ButtonProps {
    name: string;
    icon: ElementType
    onClose?: () => void;
}

export function NavigationLink({ name, icon, onClose, ...rest }: NavigationLinkProps) {

    const { asPath } = useRouter()
    const [isLess] = useMediaQuery('(max-width: 1100px)')

    const active = (asPath === '/') && name === 'Dashboard'
    if (!isLess) {
        return (
            <Button
                display='flex'
                flexDirection='column'
                colorScheme={(active) ? 'facebook' : 'none'}
                color={(active) ? 'blue.800' : 'blue'}
                onClick={((!!onClose) ? onClose : () => { })}
                pl='10px'
                {...rest}
            >
                <HStack
                    spacing='12px'
                    color='gray.100'
                    _hover={{
                        color: 'blue.300'
                    }}
                >
                    <Icon as={icon} fontSize={28}
                    />
                    <Text fontSize={16} mt='3px'>{name}</Text>
                </HStack>
            </Button>
        )
    }
    else {
        return (
            <Button
                textAlign='left'
                w='100%'
                variant='unstyled'
                {...rest}
                color='teal'
            >
                <HStack
                    spacing={5}
                >
                    <Icon as={AddIcon} fontSize={17}/>
                    <Text fontSize={18} >{name}</Text>
                </HStack>
            </Button>
        )
    }

}