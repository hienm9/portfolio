import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';
import Error from './components/Error';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('about');

  return (
 
    <div className="App">
      <Router>
      <Header>
        page={page}
        setPage={setPage}
      </Header>
      <main>

          {/* Link and Routes must be within the Router */}
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<Error />} />  
            {/* always put catch all error last. */}
          </Routes>
    
      </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;