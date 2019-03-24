import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import Icon from '../../nutec-ui/icon';

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <nav className='sidebar-menu'>
          <div className="sidebar-sticky">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  <Icon name="home" categorie="solid" size="tiny"/>Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  <Icon name="users" categorie="solid" size="tiny"/>Usuários
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exp" className="nav-link">
                  <Icon name="memory" categorie="solid" size="tiny"/>Experimentos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/scheduling" className="nav-link">
                  <Icon name="calendar-alt" categorie="solid" size="tiny"/>Agendamentos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/feedback" className="nav-link">
                  <Icon name="comments" categorie="solid" size="tiny"/>Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <Icon name="comment-dots" categorie="solid" size="tiny"/>Contatos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/partners" className="nav-link">
                  <Icon name="handshake" categorie="solid" size="tiny"/>Partners
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

}

export default Sidebar
