import "./AnalyticsChart.css";

import {

    Chart as ChartJS,

    ArcElement,

    Tooltip,

    Legend

} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(

    ArcElement,

    Tooltip,

    Legend

);

function AnalyticsChart() {

    const data = {

        labels: [

            "Pending",

            "Accepted",

            "Completed"

        ],

        datasets: [

            {

                data: [

                    4,

                    2,

                    1

                ],

                backgroundColor: [

                    "#f5b041",

                    "#58d68d",

                    "#5dade2"

                ],

                borderWidth:0

            }

        ]

    };

    return (

        <section className="analytics-section">

            <div className="chart-card">

                <h2>

                    Application Status

                </h2>

                <Doughnut data={data} />

            </div>

        </section>

    );

}

export default AnalyticsChart;