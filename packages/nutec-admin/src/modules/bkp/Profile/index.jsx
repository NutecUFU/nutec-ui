import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-flexbox-grid'
import { ProfileWrapper, ProfileHeader } from './styled'
import Config from './Config';
import CardPortal from './CardPortal';

import {getUserAuth} from '../../core/utils/auth'
import {Card} from '../../nutec-ui'
import { actions as profileActions } from '../../state/profile/profile-actions'


class Profile extends Component {

  user = getUserAuth();

  componentDidMount(){
    this.props.getProfile(this.user.id)
  }

  renderConfigs(){
    return(
      <Row>
        <Col lg={8} xl={9}>
          <Card>
            <Card.Header>
              Account
            </Card.Header>
            <Card.Body>
              <Config profile={this.props.profile} handleSubmit={(id, data) => this.props.updateProfile(id, data)}/>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} xl={3}>
          <CardPortal item={this.props.profile}/>
        </Col>
      </Row>
    )
  }

  render(){
    const {profile} = this.props
    return (
      <ProfileWrapper>
        <Grid>
          { profile ? this.renderConfigs():''}
        </Grid>
      </ProfileWrapper>
    )
  }
}

const mapProps = (state) => ({
  profile: state.profile.user
})

const mapActions = {
  getProfile: profileActions.getProfile,
  updateProfile: profileActions.updateProfie
}

export default connect(mapProps, mapActions)(Profile)
