import React from 'react'

import styled from 'styled-components'
import classNames from 'classnames'

import Footer from './layout/footer'
import Sidebar from './layout/sidebar'
import Topbar from './layout/topbar'

/**********************************************************************/

const StyledApp = styled.div`
  --sidebar-width: 25rem;
  --topbar-height: 5rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: var(--topbar-height);
  margin-left: 0;
  transition: margin-left 0.2s;

  .sidebar-active & {
    margin-left: var(--sidebar-width);
  }

  & > footer {
    margin-top: auto;
  }
`

const Main = styled.main`
  padding: 1.6rem;
`

/**********************************************************************/

const App: React.FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(true)

  const toggleSidebar = () => {
    setSidebarIsOpen((prev) => !prev)
  }

  const classes = classNames({
    'sidebar-active': sidebarIsOpen,
  })

  return (
    <StyledApp className={classes}>
      <Topbar onToggleSidebar={toggleSidebar} />
      <Sidebar />
      <Content>
        <Main>
          <div style={{ height: '150vh', backgroundColor: 'skyblue' }} />
        </Main>
        <Footer />
      </Content>
    </StyledApp>
  )
}

export default App
