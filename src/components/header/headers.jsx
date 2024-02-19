import './header.scss';
import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <div className='header__container'>
       <img className="icon" src="./language_13103552.png" alt="icon" />
       <nav className='menu'>
        <a href="#main" className='header__link'>Главная</a>
        <a href="#" className='header__link'>О нас</a>
        <a href="#dictionary" className='header__link'>Словарь</a>
        <a href="#trainer" className='header__link'>Тренажер</a>
        <a href="#" className='header__link'>Контакты</a>
       </nav>
       </div>
      </header>
    );
  }
  }
  
  export default Header;

