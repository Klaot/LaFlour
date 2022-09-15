import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/img/l-fleur-logo.png';
import Ribbon from '../assets/img/ribbon.jpg';

function Navigation() {

  return (
    <div className='container navigation'>
        <div className='logo'>
            <img width={225} src={Logo} alt='logo'/>
        </div>
        <nav className='navigation_links'>
          <div className='navigation_link'>
            <Link to='/catalog'>Каталог</Link>
            <Link to='/services'>Услуги</Link>
            <Link to='/contact'>Контактная информация</Link>
            <Link to='/review'>Отзывы клиентов</Link>
          </div>
          <div className='navigation_link'>
            <Link to='/question'>Вопрос — ответ</Link>
            <Link to='/galery'>Галерея</Link>
            <Link to='/payment'>Помощь: заказ, оплата и доставка</Link> 
          </div>
        </nav>
        <div className='navigation-social'>
            <img src={Ribbon} alt='Ribbon'/>
        </div>
    </div>
  )
}

export default Navigation