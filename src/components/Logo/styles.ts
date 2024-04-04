import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.h1<LogoProps>`
  ${() => css`
    color: '#FAFAFA';
  `}
`
