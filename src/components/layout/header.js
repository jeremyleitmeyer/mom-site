import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const StyledHeader = styled.header``

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to='/'> {siteTitle} </Link>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
