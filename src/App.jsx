import "./App.css";
import { Lang } from "./components/Lang";
import { ShowChart } from "./components/ShowChart";
import { ShowSummary } from "./components/ShowSummery";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft, faArrowRight);

function App() {
  return (
    <>
      <div className="row w-full flex justify-end">
        <Lang />
      </div>
      <div className="row">
        <ShowSummary />
      </div>
      <div className="row">
        <ShowChart />
      </div>
    </>
  );
}

export default App;
