import React, { Component } from 'react'
import ExpItem from './Item'
import './style.scss'

class List extends Component {

  renderListItem(item) {
    return (
      <div key={item.id} className="col-12 col-md-3" 
        onClick={()=>{
          this.props.toggleModal()
          this.props.exp(item.id)
          }}>
        <ExpItem {...item}/>
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
