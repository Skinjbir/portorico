import React from 'react';
import './Work.css';

function Work({ showWork }) {
  return (
    <div className={`rightContainer ${showWork ? '' : 'hidden'}`}>
      
      <h1>My Works</h1>
      
      <WorkItem 
    title="Fraud Detection System Development & Deployment - Internship at HPS" 
    description="Built and deployed a fraud detection system using autoencoders focused on identifying anomalies indicative of fraudulent activity. Responsibilities included data preprocessing, model training and tuning, and deploying the solution to production, achieving high accuracy and real-time detection capabilities."
    />

    <WorkItem 
        title="Automated Web Scraping with Azure Timer-Triggered Functions - Freelance Project" 
        description="Developed a serverless web scraping solution using Azure Functions with timer triggers to periodically extract product data from e-commerce sites. Designed the system to handle large data volumes and automatically store results in Azure Blob Storage, optimizing it for reliability and scalability."
    />

    <WorkItem 
        title="Scientific Research Platform Migration to Cloud - Freelance Project" 
        description="Migrating an existing scientific research platform to Microsoft Azure cloud environments. The project involves optimizing operational costs, enhancing system performance, and ensuring high availability, data integrity, and security compliance. Additionally, implementing scalable solutions to support future growth and facilitating seamless integration with existing data and research workflows."
    />




    
    </div>
  );
}

function WorkItem({ title, description }) {
  return (
    <div className='WorkItem'>
      <h3>{title}</h3>
      <p >{description}</p>
    </div>
  );
}

export default Work;
