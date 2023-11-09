import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Col, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface LineChartProps {
    titulo: string;
    labels: string[];
    datasetVP: number[];
    datasetFFD: number[];
}

const LineChart = (props: LineChartProps) => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: props.titulo,
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        }
    };

    const AvgDataset = (datos: number[]) => {

        const sum = datos.reduce((a, c) => a + c, 0);
        const avg = sum / datos.length;

        return props.labels.map(() => avg)
    }

    const data = {
        labels: props.labels,
        datasets: [
            {
                label: 'VP',
                data: props.datasetVP,
                borderColor: 'rgb(25, 135, 84)',
                backgroundColor: 'rgba(25, 135, 84, 0.5)',
                borderWidth: 1
            },
            {
                label: 'FFD',
                data: props.datasetFFD,
                borderColor: 'rgb(11, 94, 215)',
                backgroundColor: 'rgba(11, 94, 215, 0.5)',
                borderWidth: 1
            },
            {
                label: 'Promedio VP',
                data: AvgDataset(props.datasetVP),
                borderColor: 'rgb(25, 135, 84)',
                backgroundColor: 'rgba(25, 135, 84, 0.5)',
                borderWidth: 1,
                borderDash: [5, 5],
                //hidden: true
            },
            {
                label: 'Promedio FFD',
                data: AvgDataset(props.datasetFFD),
                borderColor: 'rgb(11, 94, 215)',
                backgroundColor: 'rgba(11, 94, 215, 0.5)',
                borderWidth: 1,
                borderDash: [5, 5]
            },
        ],
    };


    return (
        <Col xs={12} className="mt-1 mb-1">
            <Card className="border shadow-sm">
                <Card.Body>
                    <>
                        <h4>{props.titulo}</h4>
                        <Line
                            className='ChartHeight'
                            width={100}
                            height={50}
                            options={options}
                            data={data} />
                    </>
                </Card.Body>
            </Card>
        </Col>


    )

}

export default LineChart;


