import React from 'react'

import styled from 'styled-components'

/**********************************************************************/

const StyledTopbar = styled.div`
  position: fixed;
  top: 0;
  left: 25rem;
  right: 0;
  height: 5rem;
  background-color: blueviolet;
`

/**********************************************************************/

const Topbar: React.FC = () => {
  return <StyledTopbar />
}

export default Topbar
