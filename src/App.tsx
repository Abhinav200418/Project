import React, { useState } from 'react';
import LoginPage from './components/loginpage';
import MainPage from './mainpage'; // Replace with your actual main component

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    console.log('✅ Login successful');
    setLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      {loggedIn ? <MainPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default App;
