import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import MovieCard from './pages/MovieCard';


function App() {
 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/?" exact element={<Home />}></Route>
          <Route path="/movies/:id" element={<MovieDetails />}></Route>
          <Route path="/movies" element={<MovieCard />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
