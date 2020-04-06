import React, {Component }from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                    <ValueBox cols='12 4' color='green' icon='bank' value='R$ 1.890,00' text='Total de Receita' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 500,00' text='Total de Despesas' />
                    <ValueBox cols='12 4' color='blue' icon='money' value='R$ 1.390,00' text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard