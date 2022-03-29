import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../images/logo.svg'
import icon_inst from '../../images/instagram.svg'
import icon_facebook from '../../images/facebook.svg'
import icon_telegram from '../../images/telegram.svg'
import button_forward from '../../images/forward.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo-cont'>
        <img src={logo} alt='Логотип' className='footer__logo'></img>
        <p className='footer__logo-text'>Вещевой базар</p>
      </div>
      <div className='footer__contacts-cont'>
        <p className='footer__contacts-label'>Телефон</p>
        <p className='footer__contacts-value'>+7 495 123 45 67</p>
        <p className='footer__contacts-label'>Почта</p>
        <p className='footer__contacts-value'>post@name.com</p>
      </div>
      <div className='footer__instagram-cont'>
        <Link to='#'>
          <img src={icon_inst} alt='Ссылка на инстаграм' className='footer__instagram'></img>
        </Link>
      </div>
      <div className='footer__facebook-cont'>
        <Link to='#'>
          <img src={icon_facebook} alt='Ссылка на фэйсбук' className='footer__facebook'></img>
        </Link></div>
      <div className='footer__telegram-cont'>
        <Link to='#'>
          <img src={icon_telegram} alt='Ссылка на телеграм' className='footer__telegram'></img>
        </Link>
      </div>
      <div className='footer__copyright-cont'>
        <p className='footer__copyright'>2021 © Вещевой базар в городе N</p>
      </div>
      <div className='footer__subscribe-cont'>        
        <p className='footer__subscribe-text'>Подписывайтесь на рассылку</p>
        <form className='footer__subscribe-form'>
          <input className='footer__subscribe-input' placeholder='Email'>          
          </input>
          <img src={button_forward} alt='Кнопка подписаться' className='footer__subscribe-button'></img>
        </form>
      </div>
      
    </footer>
  )
}

export default Footer;
