import { Bar } from "react-chartjs-2";
import { Option } from "../../../../../dto/response/option/option";
import { useMemo } from "react";

const optionsBar = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Chart Bar',
        },
        legend: {
            display: false
        }
    },
};

const colors: string[] = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
];

interface Props {
    options: Option[]
}


function GraphicBar(props: Props) {

    const { options } = props;

    const data = useMemo(() => ({
        labels: options.map((option) => option.name),
        datasets: [
            {
                label: "Data",
                data: options.map((option) => (option.votes)),
                backgroundColor: colors,
            }
        ]
    }), [options]);

    return (
        <Bar options={optionsBar} data={data} className="p-10" />
    );
}

export default GraphicBar;