import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import FromEngineer from '../form/FromEngineer'
import './layout.css'

const EngineerForm = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <FromEngineer/>
    </div>
  )
}

export default EngineerForm