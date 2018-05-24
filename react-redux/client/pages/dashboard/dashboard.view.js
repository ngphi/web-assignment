import React from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import {Todos} from './components'
import style from './dashboard.style.scss'

export const DashboardView = cssModules(({dashboard}) => {
    return (
        <div styleName='dashboard'>
            <div styleName='dashboard__title'>
                <h4>{dashboard.title}</h4>
                <div styleName='dashboard__layout-selector'>
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div styleName='dashboard__body'>
                Dashboard
            </div>
        </div>
    )
}, style, {errorWhenNotFound: false})
