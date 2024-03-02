import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useContext } from 'react';
import { dataProvider } from '../../context/DataProvider';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export function Chart(){
    const {datos}=useContext(dataProvider);

    const days = getDays(datos);
    const amount = getDespeces(datos);
    const data = {
    //   labels: ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"], //rotar los días de la semana
      labels: days,
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
      const options ={
        responsive: true,
        animation:true,
        plugins:{
            legend:{
                display: false
            }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                stepSize: 500,
                color: "#9c9aae"
            },
            grid:{
                drawBorder: false,
                display:true
            }
          },
          x: {
            ticks: {
                
                color: "#9c9aae"
            },
            grid:{
                drawBorder: false,
                display:false
            }
          }
        }
      }
    return(
        <>
            <h2 className='text-black text-[2rem]'><b>Despeses - Última setmana</b></h2>
            
            <Bar data={data} options={options} />
            
        </>
    );
}

function getDays(datos){
    const today = new Date().setHours(0, 0, 0, 0);
    const last = datos.despeces.length;
    let lastDespecaDay = new Date(datos.despeces[last-1].day);
    const diasDiferencia = Math.floor((today-lastDespecaDay)/(1000*60*60*24));

    const diasSemana = ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"];
    let result = [];

    if(diasDiferencia>=1){
        while (lastDespecaDay < today) {
            lastDespecaDay.setDate(lastDespecaDay.getDate() + 1);
            let day = lastDespecaDay.getDate()<10? '0' + lastDespecaDay.getDate() : lastDespecaDay.getDate();
            let month = lastDespecaDay.getMonth()+1<10? '0' + (lastDespecaDay.getMonth()+1) : lastDespecaDay.getMonth()+1;
            
            let fecha = lastDespecaDay.getFullYear()+'-'+month+'-'+day;
            datos.despeces.push({day: fecha, amount: 0});

            
        }
    }

    

    for(let i=7; i>0; i--){
        console.log("AVER ",new Date(datos.despeces[last-i-1].day).getDay())
        result.push(diasSemana[new Date(datos.despeces[last-i-1].day).getDay()]);
    }
    
    return result;
}

function getDespeces(datos){
    const last = datos.despeces.length;
    let result = [];
    for(let i=7; i>0; i--){
        console.log("AVER ",datos.despeces[last-i-1].amount)
        result.push(datos.despeces[last-i-1].amount);
    }
    console.log(result);
    return result;
}