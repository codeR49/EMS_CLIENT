import React from 'react'
import Adminsidebar from '../../Component/AdminSidebar/Adminsidebar'
import ViewDataTable from '../../Component/View/ViewDataTable'
import './layout.css'
const AdminDashbord = () => {
  return (
    <div className='container'>
    <Adminsidebar/>
    <ViewDataTable/>
</div>
  )
}

export default AdminDashbord