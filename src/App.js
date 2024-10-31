import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Skills from './Skills';
import SkillsJavaScript from './SkillsJavaScript';
import ContactForm from './components/contactform/ContactForm';

function App() {
  return (
    <>
      <BrowserRouter>

        {/* Links to the different pages */}
        <nav className='app-nav'>
          <Link className='app-link' to="/">Home</Link>
          <Link className='app-link' to="/contact">Contact</Link>
          <Link className='app-link' to="/skills">Skills</Link>
        </nav>

        {/* Routes are component page(s) to navigate to */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact contactForm = {<ContactForm />} />}/>
          <Route path="skills" element={<Skills />}>
            {/* Nest Routes (skills e.g. JS, Java, etc) */}
            <Route path="javascript" element={<SkillsJavaScript />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
