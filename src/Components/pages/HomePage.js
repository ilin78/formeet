import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className="block-container">
        <h6>Вас приветствует наша команда!</h6>
        <br/>
        <h6>Для продолжения выберете <Link to="/interactions" > Взаимодействие</Link></h6>
        </div>
    )
}