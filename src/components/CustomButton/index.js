import styled from 'styled-components'

const CustomButton = styled.button`
  font-size      : 16px;
  letter-spacing : 1.04px;
  text-align     : center;
  text-transform : uppercase;
  border-radius  : 100px;
  margin         : 0 10px;
  width          : 150px;
  height         : 30px;
  border         : ${({ theme: { colors } }) => `2px solid ${colors.navy}`};
  background     : ${({ primary, theme: { colors } }) => primary ? colors.shadow(15) : colors.white};
  color          : ${({ primary, theme: { colors } }) => primary ? colors.white : colors.black};
  cursor         : pointer;
  outline        : none;
`

export default CustomButton
