import './App.scss';
import Header from './components/header/Headers';
import Trainer from './components/trainer/trainer/Trainer';
import Dictionary from './components/dictionary/dictionary/Dictionary';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './components/main page/MainPage';
import ErrorPage from './components/error page/ErrorPage';




function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/trainer' element={<Trainer/>} />
      <Route path='/dictionary' element={<Dictionary/>} />
      <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
