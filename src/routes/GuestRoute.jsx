import React from 'react'
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux'

const GuestRoute = ({ component: Component, ...rest }) => {
    
    return (
        <Route
            {...rest}

            render={props => (
                <>
                    {!rest.auth.uid ? <Component {...props} /> : (
                        <Redirect
                            to={{
                                pathname: "/",
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


export default connect(mapStateToProps)(GuestRoute)