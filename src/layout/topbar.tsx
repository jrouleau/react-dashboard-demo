import React from 'react'

import styled from 'styled-components'

/**********************************************************************/

const StyledTopbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--topbar-height);
  padding: 0 1.8rem;
  background-color: blueviolet;
  display: flex;
  align-items: center;

  .desktop & {
    transition: left 0.2s;
  }

  .desktop.sidebar-active & {
    left: var(--sidebar-width);
  }
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

const Topbar: React.FC<{ onToggleSidebar: Function }> = ({
  onToggleSidebar,
}) => {
  return (
    <StyledTopbar>
      <MenuButton className="p-link" onClick={() => onToggleSidebar()}>
        <span className="pi pi-bars" />
      </MenuButton>
    </StyledTopbar>
  )
}

export default Topbar
