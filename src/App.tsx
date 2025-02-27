import React, { useState } from 'react';
import Sidebar from './Sidebar'; 
import MainPage from './MainPage'; 

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('basic-info'); 

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); 
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onTabClick={handleTabClick} activeTab={activeTab} />
      <div style={{ marginLeft: '310px', padding: '40px', flex: 1, backgroundColor:' #f5faff' }}>
        <MainPage activeTab={activeTab} />
      </div>
    </div>
  );
};

export default App;
