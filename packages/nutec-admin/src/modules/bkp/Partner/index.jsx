import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as PartnerActions } from 'state/partner/partner-actions'

import PartnerList from './List'
import CreatePartnerModal from './CreatePartnerModal'
import PartnerModal from './PartnerModal'
import CreateForm from './CreateForm'

import './style.scss'

class Partner extends Component {

  componentDidMount(){
    this.props.getAllPartners();
  }

  render(){
    const { list, modalCreate, modalItem, partner } = this.props
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
        <PartnerList list={list} partner={this.props.getPartner} toggleModal={() => this.props.toggleModalItem()}/>
        <PartnerModal
          statusModal={modalItem}
          partner={partner}
          toggleModal={() => this.props.toggleModalItem()}
          onDelete={(id) => this.props.deletePartner(id)}>
          <div>
            {partner}
          </div>
        </PartnerModal>

        <CreatePartnerModal
          status={modalCreate}
          toggleModal={()=> this.props.toggleModal()}
          >
          <CreateForm
            submitForm={(data) => this.props.createPartner(data)}
            toggleModal={() => this.props.toggleModal()}/>
        </CreatePartnerModal>
      </div>
    )
  }
}

const mapProps = (state) => ({
  list: state.partner.list,
  modalCreate: state.partner.create,
  partner: state.partner.info || {},
  modalItem: state.partner.item
})

const mapActions = {
  getAllPartners: PartnerActions.getAllPartners,
  getPartner: PartnerActions.getPartner,
  toggleModal: PartnerActions.toggleModalCreate,
  toggleModalItem: PartnerActions.toggleModalItem,
  createPartner: PartnerActions.createPartner,
  deletePartner: PartnerActions.deletePartner
}

export default connect(mapProps,mapActions)(Partner)
