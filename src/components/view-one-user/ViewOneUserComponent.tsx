import React, { SyntheticEvent } from 'react'
import { User } from '../../models/User';
import { UserInfoComponent } from '../user-info/UserInfoComponent';
import { Redirect } from 'react-router';
import { Input, Label, FormGroup, Form, Button } from 'reactstrap';


interface IViewOneUserProps {
    currentUser: User
    viewUser: User
    errorMessage: string
    getOneUserActionMapper: (id: number) => void
    resetOneUserActionMapper: () => void
}

export class ViewOneUserComponent extends React.Component<IViewOneUserProps, any>{


    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getOneUserActionMapper(this.state.viewUserId)
    }

    updateId = (e: any) => {
        this.setState({
            viewUserId: e.currentTarget.value
        })
    }

    render() {

        if (this.props.currentUser.role.role === 'admin' || this.props.currentUser.role.role === 'finance-manager') {
            return (
                !this.props.viewUser.userId ?
                    <Form onSubmit={this.submitId}>
                        <FormGroup>
                            <Label for="searchId">ID Value</Label>
                            <Input onChange={this.updateId} type="number" placeholder="Enter a user Id" required />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    :
                    <>
                        <UserInfoComponent currentUser={this.props.viewUser} key={this.props.viewUser.userId} />
                        <Button onClick={this.props.resetOneUserActionMapper}>Search Again?</Button>
                    </>
            )
        } else {
            return (
                <Redirect to='/user-info' />
            )
        }
    }

}