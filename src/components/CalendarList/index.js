import React, { Component } from 'react'
import moment from 'moment'

// Components
import Calendar from 'components/Calendar'

// Helpers
import { date } from 'utils/date'

class CalendarList extends Component {
  constructor (props) {
    super(props)
    const start = moment(new Date(`${props.startDate}T00:00:00-06:00`)).format('MM/DD/YYYY') // Clean date format :S
    this.state = { range: date.getMonths_Days(start, props.numberOfDays) }
  }

  render () {
    const { range: { months, days } } = this.state
    return (
      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        { months.map(month => <Calendar key={month} currentMonth={month} daysRange={days} />) }
      </section>
    )
  }
}

export default CalendarList
