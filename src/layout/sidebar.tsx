import React from 'react'

import styled from 'styled-components'

/**********************************************************************/

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: calc(-1 * var(--sidebar-width));
  bottom: 0;
  width: var(--sidebar-width);
  overflow-y: auto;
  background-color: orchid;
  transition: left 0.2s;

  .mobile & {
    margin-top: var(--topbar-height);
  }

  .sidebar-active & {
    left: 0;
  }
`

/**********************************************************************/

const Sidebar: React.FC = () => {
  return <StyledSidebar />
}

export default Sidebar
