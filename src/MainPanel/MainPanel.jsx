import React from 'react'

import FetchForm from './FetchForm'
import FetchResults from './FetchResults'

const MainPanel = () => (
  <main>
    <div className="container">

      <FetchForm />
      <FetchResults />

    </div>
  </main>
)

export default MainPanel
