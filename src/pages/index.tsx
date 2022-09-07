import { Button, Flex } from "@chakra-ui/react"
import { signIn ,useSession} from "next-auth/react"
import { useRouter } from "next/router"



export default function Home () {

    function handleSignIn () {
        signIn('google')
    }

    const {data : session} = useSession()
    const {push} = useRouter()

    if (session) {
        push('/dashboard')
    }

    return (
        <Flex>
            <Button
                onClick={handleSignIn}
            >SignIn</Button>
        </Flex>
    )
}