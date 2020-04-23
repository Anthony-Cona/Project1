import React, { SyntheticEvent } from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { User } from '../../models/User'
import { Redirect } from 'react-router'

interface ICreateReimbursementProps {
    currentUser: User
    amount: number,
    description: string,
    type: number
    createNewReimbursementActionMapper: (author: number, amount: number, description: string, type: number) => void

}

// interface ICreateReimbursementState {
//     amount: number,
//     description: string,
//     type: number
// }

export class CreateReimbursementComponent extends React.Component<ICreateReimbursementProps, any>{

    createReimbursement = (e: SyntheticEvent) => {
        e.preventDefault()
        let a = this.state
        this.props.createNewReimbursementActionMapper(this.props.currentUser.userId, a.amount, a.description, a.type)
    }

    updateAmount = (e: any) => {
        this.setState({
            amount: e.currentTarget.value
        })
    }

    updateDescription = (e: any) => {
        this.setState({
            description: e.currentTarget.value
        })
    }

    updateType = (e: any) => {
        this.setState({
            type: e.target.value
        })
    }

    resetCreateReimbursement = () => {
        this.setState({
            amount: 0,
            description: null,
            type: 0,
        })
                
        
    }

    render() {
        return (
            <Form onSubmit={this.createReimbursement}>
                <Row form>
                <Col md={6}>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input onChange={this.updateDescription} type="text" name="description" id="description" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="amount">Amount</Label>
                            <Input onChange={this.updateAmount} type="number" name="amount" id="amount" step="0.01" />
                        </FormGroup>
                    </Col>
                
                </Row>
                <FormGroup>
                    <Label for="type">Type</Label>
                    <FormGroup tag="fieldset">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" onChange={this.updateType} name="radio1" value={1} required />{'Lodging'}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" onChange={this.updateType} name="radio1" value={2} required />{'Travel'}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" onChange={this.updateType} name="radio1" value={3} required />{'Food'}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" onChange={this.updateType} name="radio1" value={4} required />{'Other'}
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </FormGroup>

                <Button>Submit New Reimbursement</Button>
                <Button onClick={this.resetCreateReimbursement}>Reset Reimbursement</Button>

            </Form >
        )
    }
}