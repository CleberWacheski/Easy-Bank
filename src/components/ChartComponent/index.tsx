import { theme } from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const series = [{ name: 'Income', data: [60, 45, 20] }, {name: 'Expenses', data: [15, 25, 35] }, {name: 'Savings', data: [35, 125, 105] }]

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
    labels : ['Novembro','Dezembro','Janeiro'],
    xaxis : {
        labels : {
            style : {
                fontFamily : 'System-ui',
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
        colors : [theme.colors.green[500],theme.colors.red[500],theme.colors.blue[500]]
    },
    yaxis : {
        show : false
    },
    colors : [theme.colors.green[500],theme.colors.red[500],theme.colors.blue[500]],
    legend: { 
        fontFamily : 'System-ui',
        fontWeight: 'bold',
        fontSize :  '14'
    }

}

export function ChartComponent() {
    return (
        <Chart
            type="bar"
            height={200}
            series={series}
            options={options}
        />
    )
}

