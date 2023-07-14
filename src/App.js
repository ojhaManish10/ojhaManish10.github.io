
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

//Components
import ShowNavBar from './components/ShowNavBar/ShowNavBar';
import NavBar from './components/NavBar/NavBar';


// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Airbnb from './pages/Airbnb/Airbnb';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      
        <BrowserRouter>

        {/* Conditioned to either pu the navbar or not */}
        <ShowNavBar>
          <NavBar />
        </ShowNavBar>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/airbnb" element={<Airbnb />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
        </BrowserRouter>
        {/* <a href='www.facebook.com'>Learn react</a> */}
    </div>
  );
}

export default App;