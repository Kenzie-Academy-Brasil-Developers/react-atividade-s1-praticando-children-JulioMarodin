import logo from './logo.svg';
import './App.css';
import CenterCard from './Components/CenterCard';

function App() {
  const child1 = 'Children 1';
  const child2 = 'Children 2';
  const child3 = 'Children 3';

  return (
    <div className="App">
      <header className="App-header">
        <CenterCard prop={child1} />
        <CenterCard prop={child2} />
        <CenterCard prop={child3} />
      </header>
    </div>
  );
}

export default App;
