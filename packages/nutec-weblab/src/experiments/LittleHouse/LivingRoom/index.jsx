import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { LivingRoomWrapper } from './styled';
import { DashboardActions } from 'application/Dashboard/state/action';

const LivingRoom = ({ setActive, startClassroom }) => {

  useEffect(() => {
    setActive(true);
    startClassroom(true);
  }, [])

  return (
    <LivingRoomWrapper>
      LivingRoomWrapper
    </LivingRoomWrapper>
  )

}

const mapProps = ({}) => ({

});

const mapActions = {
  startClassroom: DashboardActions.startClassroom,
  setActive: DashboardActions.setActive,
};

export default connect(null, mapActions)(LivingRoom)
