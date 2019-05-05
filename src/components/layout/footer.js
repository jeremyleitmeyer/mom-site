import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer``

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()} | <a href="https://instagram.com/username">Margie</a>
  </StyledFooter>
)

export default Footer