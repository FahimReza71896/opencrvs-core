import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export const Content = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.copy};
  ${({ theme }) => theme.fonts.bodyStyle};
`

export const BodyContent = styled.div`
  max-width: 940px;
  margin: auto;
  position: relative;
`
