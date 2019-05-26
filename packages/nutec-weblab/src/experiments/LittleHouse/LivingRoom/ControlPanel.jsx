import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Countdown from 'react-countdown-now'
import { Button } from 'core/components'
import { getUsers, endTime } from './socket'
import { ControlPanelWrapper } from './styled'

const ControlPanel = ({ user }) => {
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    getUsers((users) => setListUser(users))
  }, [])

  const renderTimer = () => (
    <Countdown 
      date={Date.now() + 10000}
      renderer={({ minutes, seconds, completed }) => {
        if (completed) {
          endTime(user.id)
        }

        return <span>{minutes}:{seconds}</span>
      }}
    />
  )

  const renderControl = () => (
    <Button>
      Toggle LED
    </Button>
  )

  return (
    <ControlPanelWrapper>
      { user && user.control ? (<span>Controle é seu</span>) : (<span>Sem controle</span>) }
      { listUser.length > 1 && renderTimer() }
    </ControlPanelWrapper>
  )
}

const mapProps = ({ dashboard: { user } }) => ({
  user,
})

const mapActions = {}

export default connect(mapProps, mapActions)(ControlPanel)