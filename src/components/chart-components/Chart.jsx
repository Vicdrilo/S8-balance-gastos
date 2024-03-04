import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import { dataProvider } from "../../context/DataProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Chart() {
  const { datos, setToday } = useContext(dataProvider);

  const days = getDays(datos, setToday);
  const amount = getDespeces(datos);
  const data = {
    labels: days, //Muestra los últimos siete días
    datasets: [
      {
        label: "€",
        data: amount, //Recoger datos de context
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: [
          "#EC765C",
          "#EC765C",
          "#EC765C",
          "#EC765C",
          "#EC765C",
          "#EC765C",
          "#75b5be",
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
          color: "#9c9aae",
        },
        grid: {
          display: true,
        },
      },
      x: {
        ticks: {
          color: "#9c9aae",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  return (
    <>
      <h2 className="text-black text-[1.75rem] mt-4 ms-1 me-1">
        <b>Despeses - Última setmana</b>
      </h2>
      <div
        className="w-full h-full flex justify-center items-end pe-3"
        data-testid="bar-chart"
      >
        <Bar data={data} options={options} />
      </div>
    </>
  );
}

function getDays(datos, setToday) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const length = datos.despeces.length;
  let lastDespecaDay = new Date(datos.despeces[length - 1].day);
  lastDespecaDay.setHours(0, 0, 0, 0);

  const diasDiferencia =
    (today.getTime() - lastDespecaDay.getTime()) / (1000 * 60 * 60 * 24);
  const diasSemana = ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"];
  let result = [];

  //Si hay más días sin haberse registrado ningun gasto se rellenan los días con gasto 0€
  if (diasDiferencia >= 1) {
    emplenarDiesDespeces(lastDespecaDay, today, datos);
  }

  setToday(datos.despeces[length - 1].amount);

  //Se selecciona el orden de días a mostrar en el gráfico
  for (let i = 7; i > 0; i--) {
    result.push(diasSemana[new Date(datos.despeces[length - i].day).getDay()]);
  }

  return result;
}

function emplenarDiesDespeces(lastDespecaDay, today, datos) {
  while (lastDespecaDay.getTime() < today.getTime()) {
    lastDespecaDay.setDate(lastDespecaDay.getDate() + 1);

    let day =
      lastDespecaDay.getDate() < 10
        ? "0" + lastDespecaDay.getDate()
        : lastDespecaDay.getDate();
    let month =
      lastDespecaDay.getMonth() + 1 < 10
        ? "0" + (lastDespecaDay.getMonth() + 1)
        : lastDespecaDay.getMonth() + 1;

    let fecha = lastDespecaDay.getFullYear() + "-" + month + "-" + day;

    datos.despeces.push({ day: fecha, amount: 0 });
  }
}

function getDespeces(datos) {
  const length = datos.despeces.length;
  let result = [];
  for (let i = 7; i > 0; i--) {
    result.push(datos.despeces[length - i].amount);
  }

  return result;
}
