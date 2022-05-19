import React from 'react'
import Adminsidebar from '../../Component/AdminSidebar/Adminsidebar'
import GmViewDataTable from '../../Component/View/GmViewDataTable'
import ViewDataTable from '../../Component/View/ViewDataTable'
import './layout.css'

function GeneralManager() {
  return (
    <div className='container'>
    <Adminsidebar/>
    <GmViewDataTable/>
</div>
  )
}

export default GeneralManager