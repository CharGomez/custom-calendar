/* @flow */
import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'

// Helpers
import { date } from 'utils/date'

// Components
import { StyledDiv, StyledTitle, CalendarInfo, StyledDescription } from './children'

const DayTile = StyledDescription.extend`
  background-color: ${({ theme: { colors } }) => colors.transparent};
  color: ${({ theme: { colors } }) => colors.navy};
`

class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = { showCalendar: false, holidays: null }
  }

  componentWillMount () {
    const { currentMonth, daysRange, countryCode } = this.props
    const monthDays = daysRange.filter(day => moment(day).format('YYYY-MM') === currentMonth)
    const monthFirstDay = moment(currentMonth).startOf('month').format()
    const monthLastDay = moment(currentMonth).endOf('month').format()

    this.calendarInfo = {
      monthDays,
      missingDays: date.getDays(monthFirstDay, daysRange[0]),
      missingPostDays: date.getPostDays(_.last(monthDays), monthLastDay),
      startingWeekDay: moment(monthFirstDay).format('d'),
    }

    date.getMonthlyHolidays(countryCode, moment(currentMonth).format('YYYY'), moment(currentMonth).format('MM')).then(info => this.setState({ showCalendar: true, holidays: info }))
  }

  render () {
    const { currentMonth } = this.props
    return (
      this.state.showCalendar
        ? (
          <StyledDiv>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              { ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(dayOfWeek => <DayTile key={_.uniqueId('dayOfWeek')}>{dayOfWeek}</DayTile>) }
            </div>
            <StyledTitle>{`${currentMonth} (${moment(currentMonth).format('MMMM')})`}</StyledTitle>
            <CalendarInfo {...{
              startingWeekDay: this.calendarInfo.startingWeekDay,
              missingDays: this.calendarInfo.missingDays,
              monthDays: this.calendarInfo.monthDays,
              missingPostDays: this.calendarInfo.missingPostDays,
              holidays: this.state.holidays,
            }} />
          </StyledDiv>
        )
        : <StyledDiv><span>Loading...</span></StyledDiv>
    )
  }
}

export default Calendar

