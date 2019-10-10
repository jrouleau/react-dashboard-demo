import React from 'react'

import styled from 'styled-components'
import classNames from 'classnames'

import * as utils from './utils'

import Footer from './layout/footer'
import Sidebar from './layout/sidebar'
import Topbar from './layout/topbar'

/**********************************************************************/

const StyledApp = styled.div`
  --sidebar-width: 25rem;
  --topbar-height: 5rem;
`

const Mask = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #424242;
  opacity: 0.7;

  .mobile.sidebar-active & {
    display: block;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: var(--topbar-height);
  margin-left: 0;

  .desktop & {
    transition: margin-left 0.2s;
  }

  .desktop.sidebar-active & {
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
  const [isMobile, setIsMobile] = React.useState(utils.isMobile())
  const [desktopSidebarIsOpen, setDesktopSidebarIsOpen] = React.useState(true)
  const [mobileSidebarIsOpen, setMobileSidebarIsOpen] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(utils.isMobile()))
  }, [])

  React.useEffect(() => {
    if (!isMobile) setMobileSidebarIsOpen(false)
  }, [isMobile])

  React.useEffect(() => {
    if (mobileSidebarIsOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [mobileSidebarIsOpen])

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileSidebarIsOpen((prev) => !prev)
    } else {
      setDesktopSidebarIsOpen((prev) => !prev)
    }
  }

  const classes = classNames({
    'mobile': isMobile,
    'desktop': !isMobile,
    'sidebar-active':
      (!isMobile && desktopSidebarIsOpen) || (isMobile && mobileSidebarIsOpen),
  })

  return (
    <StyledApp className={classes}>
      <Mask onClick={() => setMobileSidebarIsOpen(false)} />
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
