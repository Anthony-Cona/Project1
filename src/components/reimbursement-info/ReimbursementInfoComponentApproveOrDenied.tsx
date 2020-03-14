import React from 'react'
import { Card, CardTitle, CardText, Button, ButtonGroup } from 'reactstrap'
import { Redirect } from 'react-router'
import { Reimbursement } from '../../models/Reimbursement'

interface IReimbursementInfoProps {
    currentReimbursement: Reimbursement
    approveReimbursement: (e:any) => void
    denyReimbursement: (e:any)=>void
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
                        <Button onClick={this.props.approveReimbursement} color="success">Approve</Button>
                        <Button onClick={this.props.denyReimbursement} color="danger">Deny</Button>
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