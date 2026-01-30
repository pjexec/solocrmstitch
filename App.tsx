
import React, { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Contacts from './views/Contacts';
import Deals from './views/Deals';
import Tasks from './views/Tasks';
import Templates from './views/Templates';
import ActivityFeed from './views/Activity';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'contacts': return <Contacts />;
      case 'deals': return <Deals />;
      case 'tasks': return <Tasks />;
      case 'templates': return <Templates />;
      case 'activity': return <ActivityFeed />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      <Header />
      <div className="pb-20">
        {renderView()}
      </div>
    </Layout>
  );
};

export default App;
