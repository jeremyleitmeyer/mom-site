import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`display: flex;`

const Flex = ({children}) => <StyledFlex>{children}</StyledFlex>

export default Flex