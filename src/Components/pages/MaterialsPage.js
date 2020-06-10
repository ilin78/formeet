import React from 'react'
import { Link } from 'react-router-dom'

export const MaterialsPage = () => {
    return (
        <div className="block-container">
             <h6>
                Страница МАТЕРИАЛЫ находится в разработке
                <br/><br/>
                Мы уже работаем над этим!
                <br/><br/>
                Для продолжения выберете<Link to="/interactions" > Общение </Link>
            </h6>

        </div>
    )
}