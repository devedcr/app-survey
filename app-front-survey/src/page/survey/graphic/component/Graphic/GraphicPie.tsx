import { useCallback } from "react";
import { Option } from "../../../../../dto/response/option/option";
import { Pie } from "react-chartjs-2";

export const optionsPie = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Chart Pie',
        },
    },
};

const colors = [
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

function GraphicPie(props: Props) {

    const { options } = props;

    const loadDataPie = useCallback(() => {
        return {
            labels: options.map((option) => option.name),
            datasets: [
                {
                    label: 'Votes',
                    data: options.map((option) => option.votes),
                    backgroundColor: colors,
                    borderWidth: 0,
                },
            ],
        }
    }, [options]);

    return (
        <Pie options={optionsPie} data={loadDataPie()} className="p-10" />
    )
}

export default GraphicPie;