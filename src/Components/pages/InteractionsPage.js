import React, {Fragment} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {CallFriends} from './Clients/CallFriends'
import {ChatFriends} from './Clients/ChatFriends'


export const InteractionsPage = () => {    

    return (
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col l2">  
                            <ul> 
                                <li>
                                    <Link  to="/interactions/call"  style={{color: 'green'}}> Позвонить</Link>
                                </li>
                                <li>
                                    <Link  to="/interactions/chat"  style={{color: 'green'}}> Написать</Link>
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
