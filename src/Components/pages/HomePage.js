import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className="block-container">
            <h6>Мы рады приветствовать Вас! </h6>
            <br/>
            <h6> Мы помогаем студентам и школьникам поддерживать связь с преподавателями.</h6>
            <h6> Наш проект еще совсем маленький, однако мы не заставим долго ждать.</h6>
            <h6> Следите за нашими обновлениями. Будем рады видеть Вас снова! </h6>
            <h6> Для продолжения выберете <Link to="/interactions" > Общение </Link></h6>
        </div>
    )
}