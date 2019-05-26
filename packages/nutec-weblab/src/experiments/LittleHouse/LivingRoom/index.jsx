import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { LivingRoomWrapper } from './styled';
import { DashboardActions } from 'application/Dashboard/state/action';
import Webcam from './Webcam'
import Chart from './Chart'
import Footer from './Footer'

const LivingRoom = ({ setActive, startClassroom }) => {

  useEffect(() => {
    setActive(true);
    startClassroom(true);
  }, [])

  return (
    <LivingRoomWrapper>
      <Webcam />
      <Chart />
      <Footer />
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
