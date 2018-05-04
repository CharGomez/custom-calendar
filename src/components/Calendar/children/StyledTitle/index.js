import styled from 'styled-components'

const StyledTitle = styled.p`
  font-weight: 800;
  font-size: 22px;
  color: ${({ theme: { colors } }) => colors.navy};
  letter-spacing: 0;
  text-align: center;
  margin : 10px;
`

export default StyledTitle
