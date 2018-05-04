/* @flow */
import React from 'react'
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

const Calendar = ({ currentMonth, daysRange }) => {
  const monthDays = daysRange.filter(day => {
    const formattedDay = moment(day).format('YYYY-MM')
    return formattedDay === currentMonth
  })
  const monthFirstDay = moment(currentMonth).startOf('month').format()
  const monthLastDay = moment(currentMonth).endOf('month').format()
  const missingDays = date.getDays(monthFirstDay, daysRange[0])
  const missingPostDays = date.getPostDays(_.last(monthDays), monthLastDay)
  const startingWeekDay = moment(monthFirstDay).format('d')
  return (
    <StyledDiv>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(dayOfWeek => <DayTile key={_.uniqueId('dayOfWeek')}>{dayOfWeek}</DayTile>) }
      </div>
      <StyledTitle>{currentMonth}</StyledTitle>
      <CalendarInfo {...{
        startingWeekDay,
        missingDays,
        monthDays,
        missingPostDays,
      }} />
    </StyledDiv>
  )
}

export default Calendar

