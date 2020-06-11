import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import "./App.css";
import 'materialize-css';

import { ProfilePage} from './pages/ProfilePage';
import { DisciplinesPage} from './pages/DisciplinesPage';
import { InteractionsPage} from './pages/InteractionsPage';
import { MaterialsPage} from './pages/MaterialsPage';
import { SettingsPage} from './pages/SettingsPage';
import { NoticePage} from './pages/NoticePage';
import { TasksPage } from './pages/TasksPage';
import { HomePage } from './pages/HomePage';

export default class extends Component {

  render() {
    console.log("\n\n\n\n\t\tНаш проект еще совсем маленький, однако мы не заставим долго ждать.\n"+
    "\t\tСледите за нашими обновлениями. Будем рады видеть Вас снова!\n"+
    "\t\tТак же Вы можете принять участие в нашей команде.\n"+
    "\t\tВаши пожелания и вопросы можете отправить нам на почту ilinoa90@gmail.com\n\n\n\n\n\n\n\n\n"
    );
      return (
      <BrowserRouter>
        <nav>
          <div className="nav-wrapper light-blue darken-3">
            <ul id="nav" className="right" >
              <li><a href="/">Выход</a></li>
            </ul>
          </div>
        </nav>
        <Fragment>
          <footer className="footer">
          <div className="containers">
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
                    <Link to="/interactions" > Общение </Link>
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
                <Route  exact path="/" >
                    < HomePage />
                </Route>
                <Route path="/profile" exact>
                    <ProfilePage />
                </Route>
                <Route path="/tasks" >
                    <TasksPage />
                </Route>
                <Route path="/materials" >
                    <MaterialsPage />
                </Route>
                <Route path="/interactions" >
                    <InteractionsPage />
                </Route>
                <Route path="/notice" >
                    <NoticePage />
                </Route>
                <Route path="/disciplines" >
                    <DisciplinesPage />
                </Route>
                <Route path="/settings" >
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




