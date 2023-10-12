import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import { Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface BarChartProps {
    titulo: string;
    labels: string[];
    title1: string;
    dataset1: number[];
    title2?: string;
    dataset2?: number[];
    title3?: string;
    dataset3?: number[];
}

const BarChart = (props: BarChartProps) => {

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
        }
    };

    // const AvgDataset = (datos: number[]) => {

    //     const sum = datos.reduce((a, c) => a + c, 0);
    //     const avg = sum / datos.length;

    //     return props.labels.map(() => avg)
    // }

    const datasets = [
        {
            label: props.title1,
            data: props.dataset1,
            borderColor: 'rgb(33, 150, 243)',
            backgroundColor: 'rgba(33, 150, 243, 0.5)',

            borderWidth: 1
        }
    ]

    if (props.dataset2) { 
        datasets.push({
            label: props.title2!,
            data: props.dataset2!,
            borderColor: 'rgb(244, 67, 54)',
            backgroundColor: 'rgba(244, 67, 54, 0.5)',
            borderWidth: 1  
        })
    }

    if (props.dataset3) { 
        datasets.push({
            label: props.title3!,
            data: props.dataset3!,
            borderColor: 'rgb(139, 195, 74)',
            backgroundColor: 'rgba(139, 195, 74, 0.5)',
            borderWidth: 1  
        })
    }

    const data = {
        labels: props.labels,
        datasets,
    };


    return (
        <Col xs={12} className="mt-1 mb-1">
            <Card className="border shadow-sm">
                <Card.Body>
                    <>
                        <h4>{props.titulo}</h4>
                        <Bar
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

export default BarChart;