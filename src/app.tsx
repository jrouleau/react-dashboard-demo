import React from 'react'

import Footer from './layout/footer'
import Sidebar from './layout/sidebar'
import Topbar from './layout/topbar'

/**********************************************************************/

const App: React.FC = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>Main</div>
      <Footer />
    </div>
  )
}

export default App
