import React from 'react'
import { Link } from 'react-router-dom'
import User from './user'

export const ProfilePage = () => {
    
    return (
        
        <div className="block-container">
            <User />
            <h6>
                Страница ПРОФИЛЬ находится в разработке
                <br/><br/>
                
                Мы уже работаем над этим!
                <br/><br/>
                Для продолжения выберете<Link to="/interactions" > Общение </Link>
            </h6>
        </div>
    )
}