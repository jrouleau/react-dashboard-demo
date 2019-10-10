import React from 'react'

import styled from 'styled-components'

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
  margin-left: var(--sidebar-width);

  & > footer {
    margin-top: auto;
  }
`

const Main = styled.main`
  padding: 1.6rem;
`

/**********************************************************************/

const App: React.FC = () => {
  return (
    <StyledApp>
      <Topbar />
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
