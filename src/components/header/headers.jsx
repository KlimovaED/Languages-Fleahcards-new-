import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <div className='header__container'>
       <Link to='/'><img className="icon" src="./language_13103552.png" alt="icon" /></Link>
       <nav className='menu'>
        <Link to='/' className='header__link'>Главная</Link>
        <Link to='/about' className='header__link'>О нас</Link>
        <Link to='/dictionary' className='header__link'>Словарь</Link>
        <Link to='/trainer' className='header__link'>Тренажер</Link>
        <Link to='/contatti' className='header__link'>Контакты</Link>
       </nav>
       </div>
      </header>
    );
  }
  }
  
  export default Header;

