import React from 'react'
import Gmsidebar from '../../Component/GmSidebar/GmSidebar'
import GmViewDataTable from '../../Component/View/GmViewDataTable'

import './layout.css'

function GeneralManager() {
  return (
    <div className='container'>
    <Gmsidebar/>
    <GmViewDataTable/>
</div>
  )
}

export default GeneralManager