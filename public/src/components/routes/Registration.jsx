import React, {useState} from "react";

import s from '../../stylesheets/routes/valid.module.css'
import {Link} from "react-router-dom";

export default (props) => {
    const [fisrtName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [group, setGroup] = useState("")

    return (
        <section className={s.wrapper}>
            <h3 className={s.bh3}>Регистрация</h3>
            <div className={`${s.fields_wrapper} ${s.fields}`}>
                <label htmlFor={'first_name'}>Имя:</label>
                <input value={fisrtName} onChange={(e) => setFirstName(e.target.value)}
                       type="text" name="first_name" required/>

                <label htmlFor={'last_name'}>Фамилия:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)}
                       type="text" name="last_name" required/>

                <label htmlFor={'email'}>Почта:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                       type="email" name="email" required/>

                <label htmlFor={'phone_number'}>Номер телефона:</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                       type="tel" name="phone_number" required/>

                <label htmlFor={'username'}>Логин:</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}
                       type="text" name="username" required/>

                <label htmlFor={'f_password'}>Пароль:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                       type="password" name="f_password" required/>

                <label htmlFor={'s_password'}>Повторите пароль:</label>
                <input type="password" onChange={(e) =>{
                    if (e.target.value === password) {
                        e.target.style.outlineColor = 'black'
                        e.target.style.borderColor = 'rgba(0, 0, 0, 0.15)'
                    } else {
                        e.target.style.outlineColor = 'red'
                        e.target.style.borderColor = 'red'
                    }
                }} name="s_password" required/>

                <label htmlFor={'group'}>Группа:</label>
                <select value={group} onChange={(e) => setGroup(e.target.value)}
                        name="group">
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
