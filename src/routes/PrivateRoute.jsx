import React from 'react'
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}

            render={props => (
                <>
                    {rest.auth.uid ? <Component {...props} /> : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: props.location }
                            }}
                        />
                    )}
                </>
            )}
        />
    )

}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps)(PrivateRoute)