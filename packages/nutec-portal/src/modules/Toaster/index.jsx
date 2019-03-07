import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Toaster extends Component {
  
  optionsToast() {
    return {
      autoClose: 3000,
      hideProgressBar: true
    }
  }

  notify(toaster) {
    return toaster[0].typeToast !== 'error'
      ? this.notifySuccess(toaster[0].msg)
      : this.notifyError(toaster[0].msg);
  }

  notifyError(msg) {
    toast.error(msg, this.optionsToast())
  }

  notifySuccess(msg) {
    toast.success(msg, this.optionsToast())
  }

  render() {
    const { toaster } = this.props;
    return (
      <div>
        <ToastContainer/>
        <div className="teste">
        { !!toaster.length ? this.notify(toaster) : null }
        </div>
      </div>
    )
  }

}

const mapProps = (state) => ({
  toaster: state.toaster
})

export default connect(mapProps)(Toaster)