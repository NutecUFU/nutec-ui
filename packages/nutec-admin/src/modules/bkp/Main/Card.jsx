import React, { Component } from 'react'

class Card extends Component{
  render(){
    const { className, children, title, value, icon } = this.props
    return(
      <div className={`card ${className}`}>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col">
              {children}
            </div>
            <div className="col-auto text-right">
              <div>
                <span className="card-title h6 text-muted mb-2">{title}</span>
              </div>
              <div>
                <i className="material-icons mr-1 align-text-bottom">{icon}</i>
                <span className="h5 mb-0">{value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card