import '@fontsource/outfit'
import '@fontsource/roboto'
import './App.css'

import NavBar from './Components/NavBar'
import About from './Components/About'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="about-section">
                <About />
              </div>
              <div id="resume-section">
                <Resume />
              </div>
              <div id="contact-section">
                <Contact />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
