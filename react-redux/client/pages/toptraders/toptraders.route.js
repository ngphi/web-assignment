import {Toptraders} from './toptraders.component'
import {redirectAuthentication} from 'components/AuthenticatedHOCs'

export const ToptradersRoute = {
    path: '/toptraders',
    component: redirectAuthentication('/',Toptraders)
}
