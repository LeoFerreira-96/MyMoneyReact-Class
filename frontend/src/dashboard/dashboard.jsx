import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import {getSummary} from './dashboardAction'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount(){
        this.props.getSummary()
    }

    render() {
        const {credit = 0, debt = 0 } = this.props.summary
        
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`${credit.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`} text='Total de Receita' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={` ${debt.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`} text='Total de Despesas' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`${(credit - debt).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispathToPorps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispathToPorps)(Dashboard)