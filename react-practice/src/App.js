import './App.css';
import Application from './components/Application';
import TikTacToe from './components/TikTacToe';

const App = () => {
  return (
    <div className="App">
      <TikTacToe />
      <Application />
    </div>
  );
}

export default App;
