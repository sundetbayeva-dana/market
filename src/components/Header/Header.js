import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='логотип' className='header__logo' />
      <p className='header-logo__text'>Вещевой базар</p>
      <div className='header__links-cont'>
        <HashLink to='#' className='header__link'>Мероприятия</HashLink>
        <HashLink to='#' className='header__link'>Кто мы</HashLink>
        <HashLink to='#' className='header__link'>Базар</HashLink>
        <HashLink to='#' className='header__link'>Партнерам</HashLink>
      </div>
      <Link to='/#' className='header__basket'>Корзина</Link>
    </header>
  )
}

export default Header
