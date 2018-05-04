import styled from 'styled-components'

const StyledDescription = styled.p`
  font-size: 18px;
  font-weight: ${({ isHoliday }) => isHoliday ? 800 : 400};
  color: ${({ theme: { colors }, disabled, isHoliday }) => disabled ? colors.gray : colors.holidayColor(isHoliday)};
  background-color: ${({ theme: { colors }, disabled, weekDay }) => disabled ? colors.gray : colors.dayColor(weekDay)};
  letter-spacing: 0;
  text-align: center;
  border: ${({ theme: { colors } }) => `1px solid ${colors.white}`};
  box-sizing: border-box;
  margin: 1px 0;
  width: calc(100% / 7);
`

export default StyledDescription
