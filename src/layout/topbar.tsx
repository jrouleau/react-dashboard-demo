import React from 'react'

import styled from 'styled-components'

/**********************************************************************/

const StyledTopbar = styled.div`
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  right: 0;
  height: var(--topbar-height);
  padding: 0 1.8rem;
  background-color: blueviolet;
  display: flex;
  align-items: center;
`

const MenuButton = styled.button`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: white;

  span {
    font-size: 2.8rem;
  }
`

/**********************************************************************/

const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <MenuButton className="p-link">
        <span className="pi pi-bars" />
      </MenuButton>
    </StyledTopbar>
  )
}

export default Topbar
