import React from "react";
import s from '../../stylesheets/routes/valid.module.css'
import {Link} from "react-router-dom";
import {Transition} from "react-transition-group";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            username: "",
            password: "",
            userType: "",
            key: "",
            group: "",
        }
    }

    updateFirstName = value => this.setState({firstName: value})
    updateLastName = value => this.setState({lastName: value})
    updateEmail = value => this.setState({email: value})
    updatePhoneNumber = value => this.setState({phoneNumber: value})
    updateUsername = value => this.setState({username: value})
    updatePassword = value => this.setState({password: value})
    updateUserType = value => this.setState({userType: value})
    updateKey = value => this.setState({key: value})
    updateGroup = value => this.setState({group: value})

    render() {
        return (
            <section className={s.wrapper}>
                <h3 className={s.bh3}>Регистрация</h3>
                <div className={`${s.fields_wrapper} ${s.fields}`}>
                    <label htmlFor={'first_name'}>Имя:</label>
                    <input value={this.state.firstName}
                           onChange={(e) => this.updateFirstName(e.target.value)}
                           type="text" name="first_name" required/>

                    <label htmlFor={'last_name'}>Фамилия:</label>
                    <input value={this.state.lastName}
                           onChange={(e) => this.updateLastName(e.target.value)}
                           type="text" name="last_name" required/>

                    <label htmlFor={'email'}>Почта:</label>
                    <input value={this.state.email}
                           onChange={(e) => this.updateEmail(e.target.value)}
                           type="email" name="email" required/>

                    <label htmlFor={'phone_number'}>Номер телефона:</label>
                    <input value={this.state.phoneNumber}
                           onChange={(e) => this.updatePhoneNumber(e.target.value)}
                           type="tel" name="phone_number" required/>

                    <label htmlFor={'username'}>Логин:</label>
                    <input value={this.state.username}
                           onChange={(e) => this.updateUsername(e.target.value)}
                           type="text" name="username" required/>

                    <label htmlFor={'f_password'}>Пароль:</label>
                    <input value={this.state.password}
                           onChange={(e) => this.updatePassword(e.target.value)}
                           type="password" name="f_password" required/>

                    <label htmlFor={'s_password'}>Повторите пароль:</label>
                    <input type="password" onChange={(e) => {
                        if (e.target.value === this.state.password) {
                            e.target.style.outlineColor = 'black'
                            e.target.style.borderColor = 'rgba(0, 0, 0, 0.15)'
                        } else {
                            e.target.style.outlineColor = 'red'
                            e.target.style.borderColor = 'red'
                        }
                    }} name="s_password" required/>

                    <label className={s.rl}>Аккаунт для:</label>
                    <div className={s.radio_wrapper}>
                        <span>Студента <input onChange={() => this.updateUserType('student')} name={'type'}
                                              type={'radio'}/></span>
                        <span>Преподавателя <input onChange={() => this.updateUserType('teacher')} name={'type'}
                                                   type={'radio'}/></span>
                    </div>

                    <div in={(this.state.userType !== "").toString()} className={s.custom_wrapper}>
                        <Transition in={this.state.userType === 'student'} timeout={{appear: 0, enter: 500, exit: 500}}
                                    appear
                                    unmountOnExit>
                            <div visible={(this.state.userType === 'student').toString()} className={s.custom}>
                                <label htmlFor={'group'}>Группа:</label>
                                <select
                                    value={this.state.group} name="group"
                                    onChange={(e) => this.updateGroup(e.target.value)}>
                                    <option disabled>Группа</option>
                                    <option value="KV-71">KV-71</option>
                                    <option value="KV-72">KV-72</option>
                                    <option value="KV-73">KV-73</option>
                                    <option value="KV-74">KV-74</option>
                                </select>
                            </div>
                        </Transition>

                        <Transition in={this.state.userType === 'teacher'} timeout={{appear: 0, enter: 500, exit: 500}}
                                    appear
                                    unmountOnExit>
                            <div visible={(this.state.userType === 'teacher').toString()} className={s.custom}>
                                <label htmlFor={'group'}>Ключ:</label>
                                <input type={'text'}/>
                            </div>
                        </Transition>
                    </div>
                    <p>Нажимая кнопку “Регистрация” вы соглашаетесь с условиями пользования порталом и ее правилами
                        обработки данных</p>
                    <Link to={'/login'} className={s.submit_button}>Зарегистрироваться</Link>
                </div>
            </section>
        )
    }
}
