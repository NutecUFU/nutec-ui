import React, { Component } from 'react'

import Card from './Card'

class Dashboard extends Component {
  render(){
    return(
      <div className="container-fluid main__dashboard">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-3">
            <Card 
              className="main__dashboard__card"
              title="Novos Usuários"
              value="500"
              icon="keyboard_arrow_up"
            >
              <span className="h2">
                <i className="material-icons">people</i>
              </span>
            </Card>
          </div>
          <div className="col-12 col-lg-6 col-xl-3">
            <Card 
              className="main__dashboard__card"
              title="Experimentos"
              value="50"
              icon="keyboard_arrow_up"
            >
              <span className="h2">
                <i className="material-icons">memory</i>
              </span>
            </Card>
          </div>
          <div className="col-12 col-lg-6 col-xl-3">
            <Card 
              className="main__dashboard__card"
              title="Erros"
              value="500"
              icon="keyboard_arrow_up"
            >
              <span className="h2">
                <i className="material-icons">error</i>
              </span>
            </Card>
          </div>
          <div className="col-12 col-lg-6 col-xl-3">
            <Card 
              className="main__dashboard__card"
              title="Novos Usuários"
              value="500"
              icon="keyboard_arrow_up"
            >
              <span className="h2">
                <i className="material-icons">people</i>
              </span>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard