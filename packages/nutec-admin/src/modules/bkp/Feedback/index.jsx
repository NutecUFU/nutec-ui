import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actions as FeedbackActions } from 'state/feedback/feedback-actions'
import './style.scss'

class Feedback extends Component {

  render(){

    return(
      <div>
        <h1>Feedback</h1>
      </div>
    )
  }
}

const mapProps = (state) => ({
  feedback: state.feedback
})

const mapActions = {
  verify: FeedbackActions.addFeedback
}

export default connect(mapProps, mapActions)(Feedback)
