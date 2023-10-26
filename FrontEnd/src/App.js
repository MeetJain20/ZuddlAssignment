import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
