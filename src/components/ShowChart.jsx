import { ChartSummary } from "./chart-components/ChartSummary";

export function ShowChart() {
  return (
    <div className="rounded-2xl mt-4 bg-white flex flex-col items-center">
      <div className="chart-container h-[300px]"></div>
      <div className="chart-footer w-full h-1/3 flex justify-between items-center p-6">
        <ChartSummary />
      </div>
    </div>
  );
}
