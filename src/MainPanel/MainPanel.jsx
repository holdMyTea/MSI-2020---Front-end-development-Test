import React, { useState } from 'react'

import FetchForm from './FetchForm'
import FetchResults from './FetchResults'

import './MainPanel.css'

const MainPanel = () => {
  const [fetchedJokes, setFetchedJokes] = useState([])

  return (
    <main>
      <div className="container">

        <FetchForm onFetched={setFetchedJokes} />
        <FetchResults jokes={fetchedJokes} />

      </div>
    </main>
  )
}

export default MainPanel
