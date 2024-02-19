import './App.scss';
import Header from './components/header/headers';
import Trainer from './components/trainer/trainer';
import Dictionary from './components/dictionary/Dictionary';

function App() {
  return (
    <div className="App">
     <Header />
     <Trainer />
     <Dictionary />
    </div>
  );
}

export default App;
