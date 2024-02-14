import './App.scss';
import Header from './components/headers';
import Trainer from './components/trainer';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='main'>
     <Trainer />
     </div>
    </div>
  );
}

export default App;
