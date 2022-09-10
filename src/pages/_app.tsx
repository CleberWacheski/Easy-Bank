import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/global'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { FinancesProvider } from '../context/FinancesContext'
import { UserContextProvider } from '../context/UserContext'

export const queryClient = new QueryClient()

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {


  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <FinancesProvider>
            <UserContextProvider>
              <Component {...pageProps} />
            </UserContextProvider>
          </FinancesProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>

  )
}

export default MyApp
