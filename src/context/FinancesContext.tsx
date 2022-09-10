import { createContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { api } from "../services/api";

interface Transactions {
    id: string;
    Email: string,
    Name: string;
    Amount: number;
    Type: 'Income' | 'Expenses' | 'Savings';
    Date: string;
}
interface Goals {
    id: string;
    Email: string,
    Name: string;
    Amount: number;
    category: 'Computer' | 'Car' | 'Travel' | 'Game' | 'Leisure' | 'Professional' | 'Personal' | 'Other';
}

interface data {
    Transactions: Transactions[];
    Goals: Goals[]
}


interface FinancesContextProps {
    data: data
    isLoading: boolean;
    isFetching: boolean;
    refetch: () => void;

}

interface FinancesProviderProps {
    children: ReactNode
}



export const FinancesContext = createContext({} as FinancesContextProps)



export function FinancesProvider({ children }: FinancesProviderProps) {

    const { data, isLoading, refetch, isFetching } = useQuery('finances', async () => {
        const { data: { transactions, goals } } = await api.get('getFinances')

            const Transactions = transactions.data.map((item) => {
                return item.data
            })
            const Goals = goals.data.map((item) => {
                return item.data
            })

            return {
                Transactions,
                Goals
            } 
    },{
        staleTime : 1000 * 10,
    })

    return (
        <FinancesContext.Provider value={{ data, isLoading, refetch, isFetching }}>
            {children}
        </FinancesContext.Provider>
    )
}