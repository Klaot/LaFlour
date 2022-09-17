import React from 'react'
import Importent from '../assets/img/i-importent.gif';
import image1 from '../assets/img/Services/sn1.jpg'
import image2 from '../assets/img/Services/sn2.jpg'
import image3 from '../assets/img/Services/sn3.jpg'
import image4 from '../assets/img/Services/sn4.jpg'
import image5 from '../assets/img/Services/sn5b.jpg'
import image6 from '../assets/img/Services/sn5c.jpg'
import image7 from '../assets/img/Services/sn6.jpg'
import image8 from '../assets/img/Services/sn7.jpg'
import image9 from '../assets/img/Services/sn8.jpg'
import image10 from '../assets/img/Services/sn9.jpg'
import image11 from '../assets/img/Services/sn10.jpg'
import image12 from '../assets/img/Services/sn11.jpg'
import image13 from '../assets/img/Services/sn12.jpg'
import image14 from '../assets/img/Services/sn13.jpg'
import image15 from '../assets/img/Services/sn14.jpg'
import image16 from '../assets/img/Services/sn17.jpg'
import image17 from '../assets/img/Services/sn18.jpg'
import Promotions from '../components/Promotions';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='container services'>
        <Promotions />
        <div>
            <h1>Услуги</h1>
            <div >
                <p>Наш салон предлагает большой и разнообразный ассортимент 
                свежесрезанных цветов. Мы постоянно дополняем и обновляем
                букеты в зависимости от сезона и ваших пожеланий.</p>
                <div className='services-important'>
                    <img src={Importent} alt='Importent icon'/>
                    <p>Некоторые цветы, которые мы привозим, являются сезонными и их наличие
                    в салоне «La Fleur» зависит от наличия на Голландском аукционе.
                    Поэтому мы оставляем за собой право замены отсутствующих цветов на 
                    равноценные с сохранением общего вида и цветовой гаммы букета,
                    без изменения стоимости.</p>
                </div>
                <div>
                    <h2>Цветы на заказ по городу, стране и всему миру</h2>
                    <p>Мы можем доставить нужные вам цветы в любом количестве по предварительному заказу.</p>
                    <p>Вы хотите сделать сюрприз близким и родным, но они живут в другом городе? 
                    Наш салон рад вам помочь! Мы осуществляем доставку цветов <b>по всей России</b> и даже миру.</p>
                    <p>За дополнительную плату к букету от вашего имени могут быть приложены приятные мелочи, вроде гелиевых шаров, плюшевых игрушек и конфет!
                    Момент вручения букета может быть запечатален на фотографии.</p>
                    <p>Более подробная информация об этой и других услугах может быть
                    получена по <Link className='link' to='/contact'>предоставленным контактам</Link>.</p>
                    <div className='services-img-blocks'>
                        <img src={image1} alt='image1'/>
                        <img src={image2} alt='image2'/>
                        <img src={image3} alt='image3'/>
                    </div>
                </div>
                <div>
                    <h2>Свадебная флористика</h2>
                    <p>Оформление свадеб живыми цветами — одно из приоритетных направлений нашей работы.
                     Мы предлагаем полный комплекс услуг по флористическому оформлению свадьбы.</p>
                    <p>Оригинальные <b>свадебные букеты</b> сделают свадьбу незабываемой
                     и подчеркнут ваш образ. Стоимость — от 1500 рублей.
                     При заказе свадебного букета — бутоньерка в подарок!</p>
                    <div className='services-img-blocks'>
                        <img src={image4} alt='image4'/>
                        <img src={image5} alt='image5'/>
                        <img src={image6} alt='image6'/>
                    </div>
                    <p><b>Украшения из живых цветов</b>— самый популярный акцент европейской свадебной моды. 
                    Только живой цветок может гармонировать с романтическим образом невесты, 
                    подчеркнуть ее нежность и трепетность. Украшения для прически, браслеты и 
                    подвязки — от 500 рублей. Венок на голову — от 1000 рублей.</p>
                    <div className='services-img-blocks'>
                        <img src={image7} alt='image7'/>
                        <img src={image8} alt='image8'/>
                        <img src={image9} alt='image9'/>
                    </div>
                    <p>Невозможно представить себе свадьбу без свадебной машины.
                    Это еще одна важная часть свадебной церемонии, которая
                    привлекает так много взглядов к молодоженам. 
                    Наш салон предлагает услугу <b>оформления машин живыми цветами</b>(весенне-летний сезон). 
                    Зимой — оформление искусственными высококачественными цветами. 
                    Стоимость оформления — от 3000 рублей.</p>
                    <div className='services-img-blocks'>
                        <img src={image10} alt='image10'/>
                        <img src={image11} alt='image11'/>
                    </div>
                    <p>Свадьба — яркое и значимое событие. Всегда хочется, 
                        чтобы все было продуманно до мелочей. Мы рады предложить вам 
                        интересное <b>флористическое оформление свадьбы</b> с использованием 
                        живых и искусственных цветов, а так же тканей и декора. 
                        А именно: композиции на стол молодоженов (от 3000 рублей), 
                        оформление декораций ресторана, столов гостей,
                        бокалов молодоженов (от 300 рублей за бокал), 
                        арок, а также лепестки роз (от 500 рублей).</p>
                    <div className='services-img-blocks'>
                        <img src={image12} alt='image12'/>
                        <img src={image13} alt='image13'/>
                    </div>
                    <div id ='services-img-blocks' className='services-img-blocks'>
                        <img src={image14} alt='image14'/>
                        <img src={image15} alt='image15'/>
                    </div>
                    <div>
                        <h2>Корпоративным клиентам</h2>
                        <p>Мы с удовольствием предлагаем свои услуги корпоративным клиентам.</p>
                        <p>Оформление деловых презентаций, корпоративных событий, залов для переговоров, 
                        выставочных стендов и офисных помещений флористическими композициями подчеркнет
                        значимость и торжественность мероприятия, позволит создать торжественную 
                        и праздничную обстановку. Посетители вашего заведения будут приятно удивлены
                        появлению в интерьере оригинального цветочного оформления.</p>
                        <p>Также мы предлагаем услуги по озеленению офисов и пересадке растений.</p>
                        <div className='services-img-blocks'>
                            <img src={image16} alt='image16'/>
                            <img src={image17} alt='image17'/>
                        </div>
                        <div>
                            <p>Сотрудничество с нами — это:</p>
                            <ul>
                                <li>Индивидуальный подход и максимальное внимание к каждому заказу.</li>
                                <li>Выполнение вашего заказа в короткие сроки.</li>
                                <li>Возможность <Link className='link' to='/payment'>наличного и безналичного расчета</Link> за услуги.</li>
                                <li>Скидки для корпоративных клиентов.</li>
                                <li>Доставка букетов и композиций в офис или на место мероприятия.</li>
                                <li>Бесплатный выезд флориста для обсуждения деталей оформления.</li>
                                <li>Возможность отсрочки платежа.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services