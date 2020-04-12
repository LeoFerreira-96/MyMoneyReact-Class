import React from 'react'
import '../common/template/dependecies'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'
import { Router } from 'react-router'
import Messages from '../common/msg/menssages'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)