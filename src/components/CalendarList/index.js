import React, { Component } from 'react'

// Components
import Calendar from 'components/Calendar'

// Helpers
import { date } from 'utils/date'

class CalendarList extends Component {
  constructor (props) {
    super(props)
    this.state = { range: date.getMonths_Days('05/10/2018', 67) }
  }

  render () {
    const { range: { months, days } } = this.state
    return (
      months.map(month => <Calendar key={month} currentMonth={month} daysRange={days} />)
    )
  }
}

export default CalendarList
