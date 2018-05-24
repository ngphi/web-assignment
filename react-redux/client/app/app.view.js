import React from 'react'
import cssModules from 'react-css-modules'
import {Navbar} from '../components'
import style from './app.style.scss'

export const AppView = cssModules(({page}) => {
    return (
        <div styleName="app">
            <div styleName="app__navbar">
                <Navbar/>
            </div>
            <div styleName="app__body">
                {page}
            </div>
        </div>
    )
}, style, {errorWhenNotFound: false})
