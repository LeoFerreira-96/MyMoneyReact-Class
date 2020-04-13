import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelInput'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly='' type='' />
                    <Field name='month' component={labelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês' readOnly='' type='' />
                    <Field name='year' component={labelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' readOnly='' type='' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)