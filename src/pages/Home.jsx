import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with our intuitive task manager.',
      icon: '✅',
      path: '/tasks',
    },
    {
      title: 'API Integration',
      description: 'Explore data fetched from external APIs with search and pagination.',
      icon: '🌐',
      path: '/api-data',
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful, responsive design that works on all devices.',
      icon: '📱',
      path: '/about',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to React Tailwind App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A modern React application built with Vite, featuring component architecture, 
          state management, API integration, and beautiful styling with Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
              <Link to={feature.path}>
                <Button variant="primary" size="sm">
                  Explore
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;