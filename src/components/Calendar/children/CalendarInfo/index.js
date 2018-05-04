import React from 'react'
import _ from 'lodash'

// Helpers
import { date } from 'utils/date'

import StyledDescription from '../StyledDescription'

const CalendarInfo = ({
  startingWeekDay,
  missingDays,
  monthDays,
  missingPostDays,
}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    { _.range(startingWeekDay).map(day => (
      <StyledDescription disabled key={_.uniqueId(day)} />
    ))}
    { missingDays.map(day => (
      <StyledDescription disabled key={_.uniqueId(day)}>
        { date.getDate(day) }
      </StyledDescription>
    ))}
    { monthDays.map(day => (
      <StyledDescription weekDay={!date.isWeekend(day)} key={_.uniqueId(day)}>
        { date.getDate(day) }
      </StyledDescription>
    ))}
    { missingPostDays.map(day => (
      <StyledDescription disabled key={_.uniqueId(day)}>
        { date.getDate(day) }
      </StyledDescription>
    ))}
  </div>
)

export default CalendarInfo
