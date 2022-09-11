import { useQuery } from "react-query"
import { api } from "../services/api"

export async function getDataFinances() {
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
}


export function useFinances() {
    return useQuery('finances',getDataFinances, {
        staleTime: 1000 * 5,
    })
}
