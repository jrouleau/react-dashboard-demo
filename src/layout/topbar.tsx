import React from 'react'

import styled from 'styled-components'

/**********************************************************************/

const StyledTopbar = styled.div`
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  right: 0;
  height: var(--topbar-height);
  background-color: blueviolet;
`

/**********************************************************************/

const Topbar: React.FC = () => {
  return <StyledTopbar />
}

export default Topbar
