import React from 'react'
import Promotions from '../components/Promotions'

function Question() {
  return (
    <div className='container question'>
        <Promotions/>
        <div>
            <h1>Вопросы и ответы о салоне</h1>
            <form className='question-form'>
                    <h1>Задать вопрос</h1>
                    <p>Представьтесь</p>
                    <input name='name'/>
                    <p>Электронная почта*</p>
                    <input name='email'/>
                    <p><i>Укажите электронный адрес для получения ответа</i></p>
                    <p>Текст сообщения*</p>
                    <textarea></textarea>
                    <p>* — эти поля очень важны, заполните их.</p>
                    <div className='question-form-button'>
                        <button>Отправить</button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Question