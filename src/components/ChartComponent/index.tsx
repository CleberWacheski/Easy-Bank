import dynamic from "next/dynamic"

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const series = [{ name: 'Income', data: [10, 15, 20] }, {name: 'Income', data: [15, 25, 35] }, {name: 'Income', data: [35, 125, 335] }]

const options = {
        

}

export function ChartComponent() {
    return (
        <Chart
            type="area"
            height={280}
            series={series}
            options={{
                xaxis : {
                    labels : {
                        show : false
                    }
                }
            }}
        />
    )
}

