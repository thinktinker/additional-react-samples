import React from "react"
import "./Skills.css";
import { Link, Outlet } from "react-router-dom";

function Skills() {
    return (
        <div className="content-area">
            <h1>My Skillsets</h1>
            <p>To find out more, select a skill below:</p>
            <nav className="skills-nav">
                <Link className="skills-link" to="javascript">JavaScript</Link> {/* Relative path */}
                <Link className="skills-link" to="java">Java</Link>             {/* Relative path */}
                <Link className="skills-link" to="react">React</Link>           {/* Relative path */}
            </nav>
            <Outlet /> {/* Render the nested route component */}
        </div>
    )
}

export default Skills

/**
 * TODO: create the pages for Java and React
*/
