import React from 'react'
import { Link } from 'react-router-dom';
import Flower from '../assets/img/bg1.jpg'
import PromImage7 from '../assets/img/Promotion/7.jpg';
import PromImage8 from '../assets/img/Promotion/8.png';

function Home() {
  return (
    <div className='container home'>
      <div className='promotion'>
       <img className='home-img' src={Flower} alt='Flower'/>
        <div className='promotion-workinghours'>
            <h3>Режим работы</h3>
            <p>Понедельник–воскресенье:</p>
            <h4>с 9:00 до 21:00</h4>
        </div>
        <div className='promotion-link-img'>
            <a href='#'><img src={PromImage7} alt='PromImage1'/></a>
        </div>
        <div className='promotion-link-img'>
            <a href='#'><img src={PromImage8} alt='PromImage1'/></a>
        </div>
    </div>
        <div>
          <h1>Цветы и букеты</h1>
          <Link to='/catalog'></Link>
        </div>
        
    </div>
  )
}

export default Home