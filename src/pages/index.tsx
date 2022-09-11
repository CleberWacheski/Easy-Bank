import { Avatar, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"



export default function Home() {

    const user = useContext(UserContext)
    const { push } = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    function handleSignIn() {
        signIn('google')

    }

    function handleSignOut() {
        signOut()
    }




    return (
        <Flex
            justify='center'
            align='flex-start'
            h='100vh'
            bg='teal.700'
        >
            {
                (!!user.name) ?
                    <Flex
                        justify='center'
                        align='center'
                        mt={120}
                    >
                        <VStack
                            spacing={5}
                        >

                            <Avatar
                                src={user.photo}
                                size='xl'
                                objectFit='cover'

                            />
                            <Text
                                fontWeight='extrabold'
                                fontSize={22}
                                color='white'
                            >
                                {user.email}
                            </Text>


                            <Button
                                colorScheme='teal'
                                size='lg'
                                onClick={()=> setIsLoading(true)}
                                isLoading={isLoading}
                            >
                                <HStack spacing='4px' >
                                    <Link href={'/dashboard'}>
                                        <Text
                                            color='white'
                                            fontSize={22}
                                            fontWeight='semibold'
                                            letterSpacing='tighter'
                                        >
                                            easy bank
                                        </Text>
                                    </Link>
                                </HStack>
                            </Button>

                            <Button
                                colorScheme='purple'
                                size='md'
                                onClick={handleSignOut}
                            >
                                <HStack>
                                    <Text
                                        fontWeight='medium'
                                    >
                                        Sign Out
                                    </Text>
                                </HStack>
                            </Button>
                        </VStack>
                    </Flex>
                    :
                    <VStack
                        spacing='30'
                        mt={200}
                    >
                        <Avatar
                            size='lg'
                        />
                        <Button
                            colorScheme='teal'
                            size='md'
                            onClick={handleSignIn}
                        >
                            <HStack>
                                <Image
                                    src='/Google-Logo.svg'
                                    alt="Google Logo"
                                    height={30}
                                    width={30}
                                />
                                <Text
                                    fontWeight='medium'
                                    color='white'
                                >
                                    Login with Google
                                </Text>
                            </HStack>
                        </Button>
                    </VStack>


            }

        </Flex>
    )
}

