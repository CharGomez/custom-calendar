import { css } from 'styled-components'

const style = {
  div: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 300px;
    height: 300px;
  `,
  title: css`
    font-weight: 800;
    font-size: 22px;
    color: ${({ theme: { colors } }) => colors.navy};
    letter-spacing: 0;
    text-align: center;
    margin : 10px;
  `,
  description: css`
    font-size: 18px;
    color: ${({ theme: { colors }, disabled }) => disabled ? colors.gray : colors.white};
    background-color: ${({ theme: { colors }, disabled, weekDay }) => disabled ? colors.gray : colors.dayColor(weekDay)};
    letter-spacing: 0;
    text-align: center;
    border: ${({ theme: { colors } }) => `1px solid ${colors.white}`};
    box-sizing: border-box;
    margin: 1px 0;
    width: calc(100% / 7);
  `,
}

export default style
