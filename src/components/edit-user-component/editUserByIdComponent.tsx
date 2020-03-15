import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col, ButtonGroup } from 'reactstrap'
import { User } from '../../models/User'
import { Redirect } from 'react-router'

interface IUpdateUserByIdProps {
    viewUser: User
    getOneUserActionMapper: (id: number) => void
    currentUser: User
    updateUserActionMapper:(userId:number,userName:string,password:string,
        firstName:string,
        lastName:string,
        email:string,
        roleId:number) => void
    resetOneUserActionMapper: () => void

}

interface IUpdateUserState {
    firstName:string
  lastName:string
  userName:string
  password:string
  email:string
  roleId:number
  viewUserId:number
  viewUser:User
}

export class EditUserByIdComponent extends React.Component<IUpdateUserByIdProps, IUpdateUserState>{


    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getOneUserActionMapper(this.state.viewUserId)
    }

    updateUser = async (e: SyntheticEvent) => {
        e.preventDefault()
       let a = this.state
       this.props.updateUserActionMapper(a.viewUserId,a.userName,a.password,a.firstName,a.lastName,a.email,a.roleId)
    }

    updateId = (e: any) => {
        this.setState({
            viewUserId: e.currentTarget.value
        })
    }

    updateUserName = (e:any) => {
        this.setState({
            userName: e.currentTarget.value
        })
    }

    updateFirstName = (e:any) => {
        this.setState({
            firstName: e.currentTarget.value
        })
    }

    updateLastName = (e:any) => {
        this.setState({
            lastName: e.currentTarget.value
        })
    }

    updateEmail = (e:any) => {
        this.setState({
            email: e.currentTarget.value
        })
    }

    updatePassword = (e:any) => {
        this.setState({
            password: e.currentTarget.value
        })
    }

    updateRoleId = (e:any) => {
        this.setState({
            roleId: e.currentTarget.value
        })
    }

    render() {
        if (this.props.currentUser.role.role === "admin") {
            return (
                this.props.viewUser.userId === 0 ?
                    <Form onSubmit={this.submitId}>
                        <FormGroup>
                            <Label for="searchId">ID Value</Label>
                            <Input onChange={this.updateId} type="number" placeholder="Enter a user Id" required />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    :

                    <Form onSubmit={this.updateUser}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input onChange={this.updateEmail} type="email" name="email" id="exampleEmail" placeholder={this.props.viewUser.email} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input onChange={this.updatePassword} type="text" name="password" id="examplePassword" placeholder={this.props.viewUser.password} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input onChange={this.updateFirstName} type="text" name="first" id="firstName" placeholder={this.props.viewUser.firstName} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lastName">LastName</Label>
                                    <Input onChange={this.updateLastName} type="text" name="last" id="lastName" placeholder={this.props.viewUser.lastName} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="userName">User Name</Label>
                                    <Input onChange={this.updateUserName} type="text" name="userName" id="userName" placeholder={this.props.viewUser.userName} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="role">Role 1-Admin 2-Finance-Manager 3-User</Label>
                                    <Input onChange={this.updateRoleId} type="number" name="role" id="role" placeholder={this.props.viewUser.role.roleId.toString()} min="1" max="3" />
                                    <Label for="roleName">Current Role is {this.props.viewUser.role.role}</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <ButtonGroup>
                            <Button>Update User</Button>
                            <Button onClick={this.props.resetOneUserActionMapper}>Reset Update User</Button>
                        </ButtonGroup>
                    </Form>

            )
        } else {
            return (
                <Redirect to='/user-info' />
            )
        }
    }
}