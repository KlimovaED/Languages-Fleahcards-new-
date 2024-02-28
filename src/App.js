import './App.scss';
import Header from './components/header/Headers';
import Trainer from './components/trainer/trainer/Trainer';
import Dictionary from './components/dictionary/dictionary/Dictionary';

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
