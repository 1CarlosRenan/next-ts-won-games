import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.h1<LogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`
