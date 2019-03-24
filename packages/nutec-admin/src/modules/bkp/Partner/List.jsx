import React, { Component } from 'react'
import './style.scss'

class List extends Component {

  renderListItem(item) {
    return (
      <div key={item.id} className="col-12 col-md-3" 
        onClick={()=>{
          this.props.toggleModal()
          this.props.partner(item.id)
          }}>
          <div className="card text-center mb-3">
            <div className="card-body my-3">
              <p className="card-title ">{item.name}</p>
              <div>
                <img src={item.photo} className="img-fluid"></img>
              </div>
            </div>
          </div>
      </div>
    )
  }

  render(){
    const { list } = this.props
    return(
      <div>
        <div className="row m-2">
          {
            list && list.length > 0
            ? list.map(item => this.renderListItem(item))
            : (<h5>Sem resultados</h5>)
          }
        </div>
      </div>
    )
  }
}

export default List
