import React from 'react'

export const ChatFriends = () => {

    return (
        <div className="container">        
                <input type="text" name="name" id="name" class="form-control" placeholder="Ваше Имя"/>					
                <textarea name="message" id="message" class="form-control" placeholder="Введите сообщение"/>					
                <input type="submit" value="Отправить" class="btn btn-dark"/>				
                <div>
                    <div id="all_mess"></div>	
                    <div id="out_mess"></div>				
                </div>
        </div>
    )
}