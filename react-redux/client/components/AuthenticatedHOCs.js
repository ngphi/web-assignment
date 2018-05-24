import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

export function renderWhenAuthenticated(Component,flag = true){
    const InnerComponent = ({isAuthenticated,...others}) => isAuthenticated === flag ?
                                            <Component {...others}/> : null;

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(InnerComponent);
}

export function redirectAuthentication(path,Component,flag = false) {

    const mapStateToProps = (state) => ({
        token: state.auth.token,
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated
    });

    @connect(mapStateToProps)
    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            if (isAuthenticated === flag) {
               const {router} = this.props;
               router.push(path);
            }
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === !flag
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    return withRouter(AuthenticatedComponent);

}
