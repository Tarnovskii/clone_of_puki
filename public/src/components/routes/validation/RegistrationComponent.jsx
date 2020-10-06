import React from "react";

import s from '../../../stylesheets/routes/valid.module.css'
import {Link} from "react-router-dom";

export default (props) => {
    return (
        <section className={s.wrapper}>
            <h2>Регистрация</h2>
            <div className={`${s.fields_wrapper} ${s.fields}`}>
                <label htmlFor={'first_name'}>Имя:</label>
                <input value={props.firstName} onChange={e => props.handler({
                    type: "UPDATE_FIRST_NAME", value: e.target.value
                })} type="text" name="first_name" required/>

                <label htmlFor={'last_name'}>Фамилия:</label>
                <input value={props.lastName} onChange={e => props.handler({
                    type: "UPDATE_LAST_NAME", value: e.target.value
                })} type="text" name="last_name" required/>

                <label htmlFor={'email'}>Почта:</label>
                <input value={props.email} onChange={e => props.handler({
                    type: "UPDATE_EMAIL", value: e.target.value
                })} type="email" name="email" required/>

                <label htmlFor={'phone_number'}>Номер телефона:</label>
                <input value={props.phone} onChange={e => props.handler({
                    type: "UPDATE_PHONE", value: e.target.value
                })} type="tel" name="phone_number" required/>

                <label htmlFor={'username'}>Логин:</label>
                <input value={props.username} onChange={e => props.handler({
                    type: "UPDATE_USERNAME", value: e.target.value
                })} type="text" name="username" required/>

                <label htmlFor={'f_password'}>Пароль:</label>
                <input value={props.password} onChange={e => props.handler({
                    type: "UPDATE_PASSWORD", value: e.target.value
                })} type="password" name="f_password" required/>

                <label htmlFor={'s_password'}>Повторите пароль:</label>
                <input onChange={(e) => {
                    if (e.target.value !== props.password) e.target.style.outline = "1px solid red"
                    else e.target.style.outline = "initial"
                }} type="password" name="s_password" required/>

                <label htmlFor={'group'}>Группа:</label>
                <select name="group" value={props.group}>
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
