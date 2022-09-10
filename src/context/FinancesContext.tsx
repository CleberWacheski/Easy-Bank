import { createContext, ReactNode } from "react";
import { useFinances } from "../hooks/useFinances";

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

interface Data {
    Transactions: Transactions[];
    Goals: Goals[]
}


interface FinancesContextProps {
    data: Data;
    isLoading: boolean;
    isFetching: boolean;
    refetch: () => void;

}

interface FinancesProviderProps {
    children: ReactNode
}

export const FinancesContext = createContext({} as FinancesContextProps)



export function FinancesProvider({ children }: FinancesProviderProps) {


    const { data, isLoading, refetch, isFetching } = useFinances()

    return (
        <FinancesContext.Provider value={{ data, isLoading, refetch, isFetching }}>
            {children}
        </FinancesContext.Provider>
    )
}