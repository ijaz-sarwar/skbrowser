import React from 'react'

import './header.css'

function Header() {
  return (
    <div className='headerContainer'>

      <div className='logo'>
        <img src="logo.PNG" width={180} height={102} />
      </div>
      <div style={{ width: '90%' }}>
        <h1>KPBrowser: A Dynamic Web Platform for Genome, Proteome and Metabolome Visualization and Analysis of Klebsiella pneumonia</h1>
      </div>
    </div>

  )
}

export default Header