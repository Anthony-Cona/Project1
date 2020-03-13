import React, { SyntheticEvent } from 'react'
import { Card, CardTitle, CardText, Button, ButtonGroup } from 'reactstrap'
import { Redirect } from 'react-router'
import { Reimbursement } from '../../models/Reimbursement'

interface IReimbursementInfoProps {
    currentReimbursement: Reimbursement
}


export class ReimbursementInfoComponentApproveOrDenied extends React.Component<IReimbursementInfoProps, any>{

    

    render() {

        if (this.props.currentReimbursement.reimbursementId) {
            return (
                <Card>
                    <CardTitle>{this.props.currentReimbursement.description}</CardTitle>
                    <CardText>{`Amount: ${this.props.currentReimbursement.amount}`}</CardText>
                    <CardText>{`Date Submitted: ${this.props.currentReimbursement.dateSubmitted}`}</CardText>
                    <CardText>{`Status: ${this.props.currentReimbursement.status}`}</CardText>
                    <ButtonGroup>
                        <Button color="success">Approve</Button>
                        <Button color="danger">Deny</Button>
                    </ButtonGroup>
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