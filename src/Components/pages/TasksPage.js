import React from 'react'
import { Link } from 'react-router-dom'

export const TasksPage = () => {
    return (
        <div className="block-container">
            <h6>
                Страница ЗАДНИЯ находится в разработке
                <br/><br/>
                Мы уже работаем над этим!
                <br/><br/>
                Для продолжения выберете<Link to="/interactions" > Взаимодействие</Link>
            </h6>
        </div>
    )
}