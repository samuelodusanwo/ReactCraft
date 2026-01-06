import React from 'react';
import Card from '../components/ui/Card';

const About = () => {
  const technologies = [
    { name: 'React', description: 'A JavaScript library for building user interfaces' },
    { name: 'Vite', description: 'Next generation frontend tooling' },
    { name: 'Tailwind CSS', description: 'A utility-first CSS framework' },
    { name: 'React Router', description: 'Declarative routing for React' },
    { name: 'Context API', description: 'State management using React Context' },
    { name: 'Custom Hooks', description: 'Reusable stateful logic with React Hooks' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About This Project
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A comprehensive React application demonstrating modern frontend development practices.
        </p>
      </div>

      <Card className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Project Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This application showcases the power of React combined with Tailwind CSS to create 
          beautiful, responsive, and functional user interfaces. It includes:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>Component-based architecture with reusable UI components</li>
          <li>State management using React Hooks and Context API</li>
          <li>API integration with loading and error states</li>
          <li>Responsive design that works on all screen sizes</li>
          <li>Dark/light theme switching</li>
          <li>Local storage persistence</li>
        </ul>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Technologies Used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-4 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tech.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Features Implemented
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🎨 Component Architecture
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Reusable components with props for customization, proper component composition, 
              and separation of concerns.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              ⚡ State Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Using useState, useEffect, useContext hooks along with custom hooks for 
              local storage persistence and API calls.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🌐 API Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fetching data from JSONPlaceholder API with proper error handling, loading states, 
              search functionality, and pagination.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              📱 Responsive Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Mobile-first approach using Tailwind CSS with dark mode support and smooth animations.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;