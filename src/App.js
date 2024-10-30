import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import Skills from './Skills';
import SkillsJavaScript from './SkillsJavaScript';
import ContactForm from './components/contactform/ContactForm';

function App() {
  return (
    <>
      <BrowserRouter>

        <nav className="app-nav">
            <Link className="app-link" to="/">Home</Link> 
            <Link className="app-link" to="/contact">Contact List</Link> 
            <Link className="app-link" to="/skills">Skills</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact contactForm = {<ContactForm />} />}  />
          <Route path="skills" element={<Skills />}>
            <Route path="javascript" element={<SkillsJavaScript />} />
            {/* <Route path=":id" element={<Others />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
