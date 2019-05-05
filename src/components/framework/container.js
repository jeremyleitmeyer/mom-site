import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`

const Container = ({children}) => <StyledContainer>{children}</StyledContainer>

export default Container