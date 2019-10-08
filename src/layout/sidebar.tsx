import React from 'react'

import styled from 'styled-components'

/**********************************************************************/

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 25rem;
  overflow-y: auto;
  background-color: orchid;
`

/**********************************************************************/

const Sidebar: React.FC = () => {
  return <StyledSidebar />
}

export default Sidebar
