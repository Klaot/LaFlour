import React from 'react';
import Promotions from '../components/Promotions';
import Instagram from '../assets/img/Contact/l-fleur-logo.png';
import Vk from '../assets/img/vk.png';

function Contact() {
  return (
    <div className='container contact'>
        <Promotions/>
        <div className='contact-all-pages'>
            <h1>Контактная информация</h1>
            <div className='contact-info'>
                <h2>Адрес</h2>
                <p>693008, г. Южно-Сахалинск, ул. Пуркаева, 53 (район ТЦ «Плаза»)</p>
                <p>693000, г. Южно-Сахалинск, ул. Коммунистический пр-кт, 
                86 (привокзальная площадь перед гостиницей «Монерон»)<br/>
                <i>Уважаемые клиенты, пожалуйста, при использовании телефона или электронной
                почты, подавайте заявки заранее (за сутки).</i></p>
                <p>Телефоны: <a href='tel:+7 963 289-3730'>+7 963 289-3730</a>, <a href='tel:+7 914 084 0425'> +7 914 084 0425</a></p>
                <p>Электронная почта: <a href='mailto:hi@l-fleur.ru'>hi@l-fleur.ru</a></p>
                <div className='contact-social'>
                    <p>Мы в сети:</p>
                    <a href='https://www.instagram.com/lafleursochi/'><img src={Instagram} alt='Instagram icon'/></a>
                    <a href='https://vk.com/lafleursakh'><img src={Vk} alt='Vk icon'/></a>
                </div>
                <h2>Режим работы</h2>
                <p><b>Интернет-магазин</b> работает с 9:00 до 21:00 без перерыва каждый день.
                <br/>Срочные заявки по городу выполняются в течение трех часов.</p>
                <form className='contact-form'>
                    <h1>Задать вопрос</h1>
                    <p>Представьтесь</p>
                    <input name='name'/>
                    <p>Электронная почта*</p>
                    <input name='email'/>
                    <p><i>Укажите электронный адрес для получения ответа</i></p>
                    <p>Текст сообщения*</p>
                    <textarea></textarea>
                    <p>* — эти поля очень важны, заполните их.</p>
                    <div className='contact-form-button'>
                        <button>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact