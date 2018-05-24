import {Logout} from './logout.component'
import {redirectAuthentication} from 'components/AuthenticatedHOCs'

export const LogoutRoute = {
    path: '/logout',
    component: redirectAuthentication('/',Logout,false)
}
