import { Chart } from "./chart-components/Chart";
import { ChartSummary } from "./chart-components/ChartSummary";

export function ShowChart() {
  return (
    <div className="rounded-2xl mt-4 bg-white flex flex-col items-center justify-between">
      <div className="chart-container h-[300px] w-full flex flex-col justify-center items-center">
        <Chart/>
      </div>
      <div className="chart-footer w-full h-1/3 flex justify-between items-center flex-nowrap p-6 gap-3  ">
        <ChartSummary />
      </div>
    </div>
  );
}
