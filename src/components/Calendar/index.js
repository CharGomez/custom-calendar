/* @flow */
import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import _ from 'lodash'

// Helpers
import { date } from 'utils/date'

// Style
import style from './style'

const StyledDiv = styled.div`
  ${style.div}
`

const StyledTitle = styled.p`
  ${style.title}
`

const StyledDescription = styled.p`
  ${style.description}
`

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
  const missingPostDays = date.getDays(daysRange[0], monthLastDay)
  const startingWeekDay = moment(monthFirstDay).format('d')
  return (
    <StyledDiv>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(dayOfWeek => <DayTile key={_.uniqueId('dayOfWeek')}>{dayOfWeek}</DayTile>) }
      </div>
      <StyledTitle>{currentMonth}</StyledTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { _.range(startingWeekDay).map(day => <StyledDescription disabled key={`day-${day}`} />) }
        { missingDays.map(day => <StyledDescription weekDay={!date.isWeekend(day)} key={`day-${day}`}>{moment(day).format('DD')}</StyledDescription>)}
        { monthDays.map(day => <StyledDescription weekDay={!date.isWeekend(day)} key={`day-${day}`}>{moment(day).format('DD')}</StyledDescription>)}
        { missingPostDays.map(day => <StyledDescription disabled key={`day-${day}`}>{moment(day).format('DD')}</StyledDescription>)}
      </div>
    </StyledDiv>
  )
}

export default Calendar

