import React, {Component }from 'react'

import Component from '../common/template/contentHeader'
import Content from '../common/template/content'
import contentHeader from '../common/template/contentHeader'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <contentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard