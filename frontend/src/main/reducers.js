import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({ sumary: { credit: 100, debt: 50 } })
})

export default rootReducer