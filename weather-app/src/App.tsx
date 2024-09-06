import React from 'react';
import MainPage from '../src/components/Mainpage';
import CityInput from '../src/components/CityInput';

const App = () => {
  return (
    <div className="App">
      <MainPage />
      <CityInput />
      <header className="App-header">
          Learn React
      </header>
    </div>
  );
}

export default App;
