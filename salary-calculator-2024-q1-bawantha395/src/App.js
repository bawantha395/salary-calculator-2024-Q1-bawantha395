import {BrowserRouter , Routes, Route} from "react-router-dom";
import SalaryCalculator from "./screens/salarycalculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/" element= {<SalaryCalculator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
