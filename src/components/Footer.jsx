import React from 'react';
import footerIcon from '../assets/img/copy.png';


export default function Footer() {
  return (
    <section className='container footer'>
      <div className='footer-header-img'></div>
        <div >
            <div></div>
            <div className='footer-all-info'>
              <div className='footer-info'>
                <img src={footerIcon}  alt='footerIcon'/>
                <div>
                  <h2>2012–2022 Флористический салон «Ля Флёр»
                  <br/>Разработка дизайна сайта — Студия Милакс*</h2>
                  <p>Все права защищены.
                     Частичное или полное копирование любых материалов сайта возможно только
                     <br/>с письменного разрешения Администрациии при условии
                      обязательной ссылки на сайт.</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
