import React from 'react'
import PromImage1 from '../assets/img/Promotion/important.png';
import PromImage2 from '../assets/img/Promotion/2.png';
import PromImage3 from '../assets/img/Promotion/3.png';
import PromImage4 from '../assets/img/Promotion/4.png';
import PromImage5 from '../assets/img/Promotion/5.png';
import PromImage6 from '../assets/img/Promotion/6.png';
import PromImage7 from '../assets/img/Promotion/7.jpg';
import PromImage8 from '../assets/img/Promotion/8.png';

function Promotions() {
  return (
    <div className='promotion'>
        <div className='promotion-workinghours'>
            <h3>Режим работы</h3>
            <p>Понедельник–воскресенье:</p>
            <h4>с 9:00 до 21:00</h4>
        </div>
        <div className='promotion-links'>
            <div className='promotion-link'>
                <img src={PromImage1} alt='PromImage1'/>
                <a href='#'>Акции и скидки</a>
            </div>
            <div className='promotion-link'>
                <img src={PromImage2} alt='PromImage1'/>
                <a href='#'>Хиты продаж</a>
            </div>
            <div className='promotion-link'>
                <img src={PromImage3} alt='PromImage1'/>
                <a href='#'>Торты и конфеты</a>
            </div>
            <div className='promotion-link'>
                <img src={PromImage4} alt='PromImage1'/>
                <a href='#'>Детям</a>
            </div>
            <div className='promotion-link'>
                <img src={PromImage5} alt='PromImage1'/>
                <a href='#'>К свадьбе</a>
            </div>
            <div className='promotion-link'>
                <img src={PromImage6} alt='PromImage1'/>
                <a href='#'>Бизнес</a>
            </div>   
        </div>
        <div className='promotion-link-img'>
            <a href='#'><img src={PromImage7} alt='PromImage1'/></a>
        </div>
        <div className='promotion-link-img'>
            <a href='#'><img src={PromImage8} alt='PromImage1'/></a>
        </div>
    </div>
  )
}

export default Promotions