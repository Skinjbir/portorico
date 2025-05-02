import React from 'react';
import './Work.css';
import workItems from "../../data/workItems"; 

/**
 * The Work component renders a list of work items inside a container.
 * It displays a title and iterates over the `workItems` array to render
 * individual `WorkItem` components.
 *
 * @component
 * @returns {JSX.Element} The rendered Work component.
 */
function Work() {
  return (
    <div className="rightContainer">
      <h1>My Works</h1>

      {workItems.map((item, index) => (
        <WorkItem key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

function WorkItem({ title, description }) {
  return (
    <div className="WorkItem">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Work;
