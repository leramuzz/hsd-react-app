import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import List from "./components/List.jsx";
import ClickCounter from "./components/ClickCounter.jsx";

function App() {
    return (
      <Router>
        <nav>
          <NavLink to="/list">Task List</NavLink>
          <NavLink to="/counter">Counter</NavLink>
        </nav>
        <Routes>
          <Route
            path="/list"
            element={<List />}
          />
          <Route
            path="/counter"
            element={<ClickCounter />}
          />
      </Routes>
    </Router>
  );
}

export default App;
