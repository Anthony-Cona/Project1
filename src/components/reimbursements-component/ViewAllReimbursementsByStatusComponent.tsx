import React, { SyntheticEvent } from 'react'
import { User } from '../../models/User';
import { CardDeck } from '../general-components/card-deck-component/CardDeckComponent';
import { Redirect } from 'react-router';
import { ReimbursementInfoComponent } from '../reimbursement-info/ReimbursementInfoComponent';
import { Reimbursement } from '../../models/Reimbursement';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ReimbursementInfoComponentApproveOrDenied } from '../reimbursement-info/ReimbursementInfoComponentApproveOrDenied';

interface IViewAllReimbursementsStatusProps {
    currentUser: User
    viewStatusReimbursement: number
    currentReimbursement: Reimbursement
    allReimbursements: Reimbursement[]
    errorMessage: string
    getReimbursementsByStatusActionMapper: (id: number) => void
    resetReimbursementsActionMapper: () => void
    updateReimbursementToApprovedOrDeniedActionMapper: (reimbursement: Reimbursement) => void
}


export class ViewAllReimbursementsByStatusComponent extends React.Component<IViewAllReimbursementsStatusProps, any>{


    submitStatus = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getReimbursementsByStatusActionMapper(this.state.viewStatusReimbursement)
    }

    updateStatus = (e: any) => {
        this.setState({
            viewStatusReimbursement: e.target.value
        })
    }

    approveReimbursement = async (e: Reimbursement) => {
        // e.preventDefault()    
        e.status = 2
        e.resolver = this.props.currentUser.userId
        this.props.updateReimbursementToApprovedOrDeniedActionMapper(e)

        setTimeout(() => {
            this.setState({
                allReimbursements: this.props.getReimbursementsByStatusActionMapper(1) 
            })
        }, 100);

        setTimeout(()=>{
            if(this.props.allReimbursements.length === 1){
                this.props.resetReimbursementsActionMapper()
            }
        }, 300);
    }

    denyReimbursement = async (e: Reimbursement) => {
        // e.preventDefault()    
        e.status = 3
        e.resolver = this.props.currentUser.userId
        this.props.updateReimbursementToApprovedOrDeniedActionMapper(e)

        setTimeout(() => {
            this.setState({
                allReimbursements: this.props.getReimbursementsByStatusActionMapper(1),
                
            })
        }, 100);

        setTimeout(()=>{
            if(this.props.allReimbursements.length === 1){
                this.props.resetReimbursementsActionMapper()
            }
        }, 300);
    }


    render() {

        

        let reimbursementDisplay
        this.props.allReimbursements.length && this.props.allReimbursements[0].status === 1 ?
            reimbursementDisplay = this.props.allReimbursements.map((ele) => {
                return <ReimbursementInfoComponentApproveOrDenied denyReimbursement={() => this.denyReimbursement(ele)} approveReimbursement={() => this.approveReimbursement(ele)} currentReimbursement={ele} key={ele.reimbursementId} />
            })
            :
            reimbursementDisplay = this.props.allReimbursements.map((ele) => {
                return <ReimbursementInfoComponent currentReimbursement={ele} key={ele.reimbursementId} />
            })
        console.log(this.props.allReimbursements)

        if (this.props.currentUser.role.role === 'admin' || this.props.currentUser.role.role === 'finance-manager') {
            return (
                !this.props.allReimbursements.length ?
                    <Form onSubmit={this.submitStatus}>
                        <FormGroup>
                            <Label for="searchStatus">Reimbursement Status Value</Label>
                            <FormGroup tag="fieldset" >
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" onChange={this.updateStatus} name="radio1" value={1} required />{'Pending'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" onChange={this.updateStatus} name="radio1" value={2} required />{'Accepted'}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" onChange={this.updateStatus} name="radio1" value={3} required />{'Declined'}
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    :                    
                    <>
                        <CardDeck elementsPerRow={4}>
                            {reimbursementDisplay}
                        </CardDeck>
                        <Button onClick={this.props.resetReimbursementsActionMapper}>Search Again?</Button>
                    </>
            )
        } else {
            return (
                <Redirect to='/user-info' />
            )
        }
    }
    
}