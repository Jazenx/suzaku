import styled from 'styled-components'
import { color } from 'styled-system'
import { BoxProps } from '../../theme/box'

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${color};
`

export default Box
