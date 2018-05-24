import {Login} from './login.component'
import {redirectAuthentication} from 'components/AuthenticatedHOCs'

export const LoginRoute = {
    path: '/login',
    component: redirectAuthentication('/',Login,true)
}
