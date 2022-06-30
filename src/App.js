import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          {/* Link and Routes must be within the Router */}
          <Header/>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<Error />} />  
      {/* always put catch all error last. */}
          </Routes>
        </Router>
      </main>
      <Footer/>
    </div>
  );
}

export default App;