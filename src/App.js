import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Resume from './components/Resume';
import Project from './components/Project';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HEADER</h1>
      </header>
      <main>
        <Router>
          {/* Link and Routes must be within the Router */}
        <nav>
          <Link to='/'>Home</Link>  |
          <Link to='/about'>About</Link>  |
          <Link to='/project'>Project</Link>  |
          <Link to='/resume'>Resume</Link>  
        </nav>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<Error />} />  
      {/* always put catch all error last. */}
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;