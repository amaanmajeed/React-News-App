import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/:country/:page' element={<News />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
