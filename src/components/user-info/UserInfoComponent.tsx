import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import { User } from '../../models/User'
import { Redirect } from 'react-router'

interface IUserInfoProps {
    currentUser: User
}

export class UserInfoComponent extends React.Component<IUserInfoProps, any>{


    render() {

        if (this.props.currentUser.userId) {
            return (
                <Card>
                    <CardTitle>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</CardTitle>
                    <CardText>{`Username: ${this.props.currentUser.userName}`}</CardText>
                    <CardText>{`User Email: ${this.props.currentUser.email}`}</CardText>
                    <CardText>{`Role: ${this.props.currentUser.role.role}`}</CardText>
                </Card>
            )
        }
        else {
            return (
                <Redirect to='/login' />
            )
        }        
    }
}