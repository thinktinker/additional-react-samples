import React from 'react'
import './Skills.css'
import {Link, Outlet} from 'react-router-dom';

function Skills() {
  return (
    <div className='content-area'> 
      <h1>Skills</h1>
      <p>
        To find out more, select each link:
      </p>
      <nav className="skills-nav">
        <Link className="skills-link" to="javascript">JavaScript</Link>
        <Link className="skills-link" to="java">Java</Link>
        <Link className="skills-link" to="react">React</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Skills;