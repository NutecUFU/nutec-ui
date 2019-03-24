import React, { Component } from 'react'
import Immutable from 'seamless-immutable'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { connect } from 'react-redux'
import { actions as SchedulingActions } from 'state/scheduling/scheduling-actions'
import ScheduleModal from './ScheduleModal'
import CreateScheduleModal from './CreateScheduleModal'
import CreateScheduleForm from './CreateForm'
import "./style.scss"

const localizer = BigCalendar.momentLocalizer(moment)

class Scheduling extends Component {

  componentDidMount() {
    this.props.getSchedules();
  }

  handleSubmit(event) {
    const { slotDate } = this.props
    event.dtSchedule = moment(slotDate).format('YYYY-MM-DD');
    this.props.createSchedule(event);
  }

  render() {
    const { modal, createModal, slotDate, schedules, single } = this.props
    return (
      <div className="scheduling">
        <h1>Eventos</h1>
        <div className="separator mb-3"></div>
        <div className="card">
          <div className="card-body">
            <BigCalendar
              popup
              selectable
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={schedules ? Immutable.asMutable(schedules) : [{}]}
              startAccessor="start"
              endAccessor="end"
              style={{height:"60vh"}}
              onSelectEvent={event => {
                  this.props.toggleModal()
                  this.props.getSchedule(event.id)
                }
              }
              onSelectSlot={(slot) => this.props.createScheduleModal(slot)}
            />
          </div>
        </div>
        <ScheduleModal
          status={modal}
          schedule={single}
          toggleModal={() => this.props.toggleModal()}
          onDelete={(id) => this.props.deleteSchedule(id)}/>

        <CreateScheduleModal
          status={createModal}
          toggleModal={() => this.props.createScheduleModal()}>
          <CreateScheduleForm
            currentSlot={slotDate}
            toggleModal={() => this.props.createScheduleModal()}
            onSubmit={(event) => this.handleSubmit(event)}/>
        </CreateScheduleModal>
      </div>
    )
  }
}

const mapProps = (state) => ({
  modal: state.scheduling.modal,
  createModal: state.scheduling.createModal,
  slotDate: state.scheduling.slot && state.scheduling.slot.start || '',
  schedules: state.scheduling.list,
  single: state.scheduling.schedule || {}
})

const mapActions = {
  toggleModal: SchedulingActions.schedulingToggleModal,
  createScheduleModal: SchedulingActions.createScheduleModal,
  getSchedules: SchedulingActions.getSchedules,
  getSchedule: SchedulingActions.getSchedule,
  createSchedule: SchedulingActions.createSchedule,
  deleteSchedule: SchedulingActions.deleteSchedule
}


export default connect(mapProps, mapActions)(Scheduling)
