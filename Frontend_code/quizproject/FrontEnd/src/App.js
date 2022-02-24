import history from "./utils/history";
import { Router } from "react-router-dom";
import Navigation from "./navigation";

function App() {
  return (
    <Router history={history}>
      <Navigation />
    </Router>
  );
}

export default App;
