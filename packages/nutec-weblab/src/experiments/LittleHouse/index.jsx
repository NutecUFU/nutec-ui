import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { LittleHouseWrapper } from './styled'
import LivingRoom from './LivingRoom';
import { DashboardActions } from 'application/Dashboard/state/action';

const LittleHouse = ({match, setTitle, setActive}) => {

  useEffect(() => {
    setTitle('Casinha')
  }, [])

  return (
    <LittleHouseWrapper>
      <Route path={`${match.url}/living-room`} component={LivingRoom} />
    </LittleHouseWrapper>
  )
}

const mapProps = ({dashboard}) => ({

})

const mapActions = {
  setTitle: DashboardActions.setTitle,
  setActive: DashboardActions.setActive
}

export default connect(mapProps, mapActions)(LittleHouse)
