import React from 'react'
import {DashboardView} from './dashboard.view'
import {connect} from 'react-redux'

@connect(state => ({dashboard: state.dashboard}))
export class Dashboard extends React.Component {

    render() {
        return <DashboardView dashboard={this.props.dashboard}/>
    }
}
