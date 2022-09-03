import React from 'react'

import './header.css'

function Header() {
  return (
    <div className='headerContainer'>

      <div className='logo'>
        <img src="logo.PNG" width={170} height={102} />
      </div>
      <div style={{ width: '88%' }}>
        <h1 style={{fontWeight:'bold'}}>KPBrowser: A Dynamic Web Platform for Genome, Proteome and Metabolome Visualization and Analysis of <i>Klebsiella pneumoniae</i></h1>
      </div>
    </div>

  )
}

export default Header