import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as ExpActions } from 'state/exp/exp-actions'

import ExpList from './List'
import CreateExpModal from './CreateExpModal'
import ExpModal from './ExpModal'
import CreateForm from './CreateForm'

import './style.scss'

class Exp extends Component {

  componentDidMount(){
    this.props.getAllExp();
  }

  render(){
    const { list, modalCreate, modalItem, exp } = this.props
    return(
      <div className="exp">
        <div className="row mb-3">
          <div className="col-11 col-lg-11">
            <input type="text" placeholder="Search" className="form-control"/>
          </div>
          <div className="col-1 col-lg-1">
            <input onClick={()=> this.props.toggleModal()} type="button" value="new" className="btn btn-primary w-100"/>
          </div>
        </div>
        <div className="separator"></div>
        <ExpList list={list} exp={this.props.getExp} toggleModal={() => this.props.toggleModalItem()}/>
        <ExpModal
          statusModal={modalItem}
          experiment={exp}
          toggleModal={() => this.props.toggleModalItem()}
          onDelete={(id) => this.props.deleteExp(id)}>
          <div>
            {exp}
          </div>
        </ExpModal>

        <CreateExpModal
          status={modalCreate}
          toggleModal={()=> this.props.toggleModal()}
          >
          <CreateForm
            submitForm={(data) => this.props.createExp(data)}
            toggleModal={() => this.props.toggleModal()}/>
        </CreateExpModal>
      </div>
    )
  }
}

const mapProps = (state) => ({
  list: state.exp.list,
  modalCreate: state.exp.create,
  exp: state.exp.info || {},
  modalItem: state.exp.item
})

const mapActions = {
  getAllExp: ExpActions.getAllExp,
  getExp: ExpActions.getExp,
  toggleModal: ExpActions.toggleModalCreate,
  toggleModalItem: ExpActions.toggleModalItem,
  createExp: ExpActions.createExp,
  deleteExp: ExpActions.deleteExp
}

export default connect(mapProps,mapActions)(Exp)
