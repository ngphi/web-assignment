import {App} from './app'
import {MainPage,
        NotFoundRoute,
        RegisterRoute,
        LoginRoute,
        LogoutRoute,
        ToptradersRoute} from './pages'

export const AppRoute = {
    childRoutes: [
        {
            path: '/',
            component: App,
            indexRoute: {
                component: MainPage
            },
            childRoutes: [
                RegisterRoute,
                LoginRoute,
                LogoutRoute,
                ToptradersRoute,
                NotFoundRoute
            ]
        }
    ]
}
