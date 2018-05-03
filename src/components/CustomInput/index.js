import styled from 'styled-components'
import { colorType } from 'utils/types'

const CustomInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: ${props => `1px solid ${props.theme.colors.navy}`};
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  width: 200px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  &:focus,
  &:active {
    outline: 0;
  };
`

CustomInput.propTypes = {
  color: colorType,
}

CustomInput.defaultProps = {
  color: 'black',
}

export default CustomInput
