import React from 'react';
import Dashboard from '../components/Dashboard';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Student Portal Dashboard</h1>
            <Dashboard />
        </div>
    );
};

export default Home;