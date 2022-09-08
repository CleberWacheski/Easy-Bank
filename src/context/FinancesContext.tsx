import { createContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { api } from "../services/api";

interface Transactions {
        id : string;
        Email: string,
        Name: string;
        Amount: number;
        Type: 'Income' | 'Expenses' | 'Savings';
        Date: string;
}


interface FinancesContextProps {
    data : Transactions[]
    isLoading : boolean;
    isFetching : boolean;
    refetch : () => void;

}

interface FinancesProviderProps {
    children: ReactNode
}



export const FinancesContext = createContext({} as FinancesContextProps)



export function FinancesProvider({ children }: FinancesProviderProps) {

    const { data, isLoading, refetch,isFetching} = useQuery('transactions', async () => {
        const { data: { data } } = await api.get('getTransactions')

        return data.map((item) => {
            return item.data
        })
    })


    return (
        <FinancesContext.Provider value={{data,isLoading,refetch,isFetching}}>
            {children}
        </FinancesContext.Provider>
    )
}