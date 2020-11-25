import React from 'react'
import { Switch } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Dashboard from '../components/dashboard/Dashboard'
import CreateProject from '../components/projects/CreateProject'
import ProjectDetails from '../components/projects/ProjectDetails'
import PrivateRoute from './PrivateRoute'
import GuestRoute from './GuestRoute'


const Routes = () => {

    return (
        <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/project/:id" component={ProjectDetails} />
            <GuestRoute path="/signin" component={SignIn} />
            <GuestRoute path="/signup" component={SignUp} />
            <PrivateRoute path="/create" component={CreateProject} />
        </Switch>
    )

}


export default Routes