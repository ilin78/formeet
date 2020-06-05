import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {styles} from "./index.css";
import 'materialize-css';

import { ProfilePage} from './pages/ProfilePage';
import { DisciplinesPage} from './pages/DisciplinesPage';
import { InteractionsPage} from './pages/InteractionsPage';
import { MaterialsPage} from './pages/MaterialsPage';
import { SettingsPage} from './pages/SettingsPage';
import { NoticePage} from './pages/NoticePage';
import { TasksPage } from './pages/TasksPage';

export default class extends Component {

  render() {
      return (
      <BrowserRouter>
        <nav>
          <div className="nav-wrapper light-blue darken-3">
            <ul>  <li>
                <Link to="/"> На главную</Link>
            </li>
            </ul>
            <ul id="nav" className="right" >
              <li><a href="">Выход</a></li>
            </ul>
          </div>
        </nav>
        <Fragment>
            <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col l2">  
              <ul> 
              <li style={{marginBottom: 10}}>
                <Link  to="/profile"> Профиль</Link>
              </li>
              <li style={{marginBottom: 10}}>
                <Link to="/tasks"> Задания</Link>
              </li>
              <li style={{marginBottom: 10}}>
                <Link to="/materials"> Материалы</Link>
              </li>
              <li style={{marginBottom: 10}}>
                <Link to="/interactions"> Взаимодействие</Link>
              </li>
              <li style={{marginBottom: 10}}>
                <Link to="/notice"> Объявления</Link>
              </li>
              <li style={{marginBottom: 10}}>
                <Link to="/disciplines"> Дисциплины</Link>
              </li>
              <li style={{marginBottom: 10}}>
                <Link to="/settings"> Настройки</Link>
              </li>
            </ul>
              </div>
                <div className="col s6 offset-l100 s10">
                <Route  exact path="/" render={() => 
                  <div>Home</div>}>
                </Route>    
                <Route path="/profile" exact>
                    <ProfilePage />
                </Route>
                <Route path="/tasks" exact>
                    <TasksPage />
                </Route>
                <Route path="/materials" exact>
                    <MaterialsPage />
                </Route>
                <Route path="/interactions" exact>
                    <InteractionsPage />
                </Route>
                <Route path="/notice" exact>
                    <NoticePage />
                </Route>
                <Route path="/disciplines" exact>
                    <DisciplinesPage />
                </Route>
                <Route path="/settings" exact>
                    <SettingsPage />
                </Route>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
      </BrowserRouter>
      )
    }
  }




