import React from "react";

import s from '../../stylesheets/routes/valid.module.css'
import {Link} from "react-router-dom";

export default (props) => {
    return (
        <section className={s.wrapper}>
            <h3 className={s.bh3}>Регистрация</h3>
            <div className={`${s.fields_wrapper} ${s.fields}`}>
                <label htmlFor={'first_name'}>Имя:</label>
                <input type="text" name="first_name" required/>

                <label htmlFor={'last_name'}>Фамилия:</label>
                <input type="text" name="last_name" required/>

                <label htmlFor={'email'}>Почта:</label>
                <input type="email" name="email" required/>

                <label htmlFor={'phone_number'}>Номер телефона:</label>
                <input type="tel" name="phone_number" required/>

                <label htmlFor={'username'}>Логин:</label>
                <input type="text" name="username" required/>

                <label htmlFor={'f_password'}>Пароль:</label>
                <input type="password" name="f_password" required/>

                <label htmlFor={'s_password'}>Повторите пароль:</label>
                <input type="password" name="s_password" required/>

                <label htmlFor={'group'}>Группа:</label>
                <select name="group">
                    <option disabled>Группа</option>
                    <option value="KV-71">KV-71</option>
                    <option value="KV-72">KV-72</option>
                    <option value="KV-73">KV-73</option>
                    <option value="KV-74">KV-74</option>
                </select>

                <p>Нажимая кнопку “Регистрация” вы соглашаетесь с условиями пользования порталом и ее правилами
                    обработки данных</p>
                <Link to={'/login'} className={s.submit_button}>Зарегистрироваться</Link>
            </div>
        </section>
    )
}
