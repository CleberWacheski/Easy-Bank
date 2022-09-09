import { theme } from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"
import { getMonth } from "date-fns"
import dynamic from "next/dynamic"
import { useContext } from "react"
import { FinancesContext } from "../../context/FinancesContext"
import { months } from "../../utils/dateFormat"

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})


export function ChartComponent() {

    const { data } = useContext(FinancesContext)

    const {Transactions} = data



    const lastThreeDatesTransactions = Transactions.reduce((acc, item) => {
        if (getMonth(new Date(item.Date)) === getMonth(new Date())) {
            acc[0] = months[new Date(item.Date).getMonth()]
        }
        else if (getMonth(new Date(item.Date)) === (getMonth(new Date()) - 1)) {
            acc.push(months[new Date(item.Date).getMonth()])
        }
        else if (getMonth(new Date(item.Date)) === (getMonth(new Date()) - 2)) {
            acc.push(months[new Date(item.Date).getMonth()])
        }

        return acc
    }, [months[new Date().getMonth()]])


    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.black,

        },
        labels: lastThreeDatesTransactions,
        xaxis: {
            labels: {
                style: {
                    fontFamily: 'System-ui',
                    fontWeight: 'bold'
                }
            }
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: 'solid',
            colors: [theme.colors.green[500], theme.colors.red[500], theme.colors.blue[500]]
        },
        yaxis: {
            show: false
        },
        colors: [theme.colors.green[500], theme.colors.red[500], theme.colors.blue[500]],
        legend: {
            fontFamily: 'System-ui',
            fontWeight: 'bold',
            fontSize: '14'
        }

    }


    const series = Transactions.reduce((acc, item) => {
        if (getMonth(new Date(item.Date)) === getMonth(new Date())) {
            if (item.Type === 'Income') {
                acc[0].data[0] += item.Amount
            }
            else if (item.Type === 'Expenses') {
                acc[1].data[0] += item.Amount
            }
            else if (item.Type === 'Savings') {
                acc[2].data[0] += item.Amount
            }


        }
        else if (getMonth(new Date(item.Date)) === (getMonth(new Date()) - 1)) {
            if (item.Type === 'Income') {
                acc[0].data[1] += item.Amount
            }
            else if (item.Type === 'Expenses') {
                acc[1].data[1] += item.Amount
            }
            else if (item.Type === 'Savings') {
                acc[2].data[1] += item.Amount
            }

        }
        else if (getMonth(new Date(item.Date)) === (getMonth(new Date()) - 2)) {
            if (item.Type === 'Income') {
                acc[0].data[2] += item.Amount
            }
            else if (item.Type === 'Expenses') {
                acc[1].data[2] += item.Amount
            }
            else if (item.Type === 'Savings') {
                acc[2].data[2] += item.Amount
            }

        }

        return acc
    },
        [{ name: 'Income', data: [0] }, { name: 'Expenses', data: [0] }, { name: 'Savings', data: [0] }],

    )

    return (
        <Chart
            type="bar"
            height={180}
            series={series}
            options={options}
        />
    )
}

