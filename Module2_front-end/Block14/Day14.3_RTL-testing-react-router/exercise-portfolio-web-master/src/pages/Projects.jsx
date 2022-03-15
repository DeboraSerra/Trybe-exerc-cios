import React from 'react';
import { projectLink, projectText, projectId } from '../services/script';

class Projects extends React.Component {

  render() {
    return (
      <section>
        <h2>My Projects</h2>
        <ul>
          {projectLink.map((project, index) => (
            <li key={ projectId[index] }>
              <a href={ project }>{projectText[index]}</a>
            </li>
          ))}
        </ul>
      </section>
    );
  };
}

export default Projects;
