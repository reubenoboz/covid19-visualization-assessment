import { BackTop } from 'antd'
import React from 'react'
import Header from '../Header/Header'
import './Layout.scss'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header />
            <div className="content">
                {children}
            </div>
            <div className='footer'>
            </div>
            <BackTop /> 
        </div>
    )
}

export default Layout
