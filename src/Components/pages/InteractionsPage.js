import React, {Fragment} from 'react';
import {Link, Route} from 'react-router-dom'
import {CallFriends} from './Clients/CallFriends'
import {ChatFriends} from './Clients/ChatFriends'


export const InteractionsPage = () => {    

    return (
        <Fragment>
            <footer className="footer">
                <div className="block-container">
                    <div className="row">
                        <div className="col l2">  
                            <ul> 
                                <li>
                                    <Link  to="/interactions/call"   className="inter-block "> Позвонить</Link>
                                </li>
                                <li>
                                    <Link  to="/interactions/chat"  className="inter-block "> Написать</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col s6 offset-l100 s10">
                            <Route path="/interactions/call" exact>
                                <CallFriends />
                            </Route>
                            <Route path="/interactions/chat" exact>
                                <ChatFriends />
                            </Route>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}