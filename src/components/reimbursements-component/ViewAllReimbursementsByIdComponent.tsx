import React, { SyntheticEvent } from 'react'
import { User } from '../../models/User';
import { CardDeck } from '../general-components/card-deck-component/CardDeckComponent';
import { UserInfoComponent } from '../user-info/UserInfoComponent';
import { Redirect } from 'react-router';
import { ReimbursementInfoComponent } from '../reimbursement-info/ReimbursementInfoComponent';
import { Reimbursement } from '../../models/Reimbursement';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

interface IViewAllReimbursementsProps {
    currentUser: User
    viewUserReimbursement: number
    currentReimbursement: Reimbursement
    allReimbursements: Reimbursement[]
    errorMessage: string
    getReimbursementsByIdActionMapper: (id: number) => void
    resetReimbursementsActionMapper: () => void
    checked: Boolean
}


export class ViewAllReimbursementsByIdComponent extends React.Component<IViewAllReimbursementsProps, any>{

    constructor(props: any) {
        super(props)
        this.getReimbursemntForUser(this.props.currentUser.userId)
    }

    // componentDidMount(){
    //     // check to see if we already have users (redux store)
    //     if(this.props.allReimbursements.length !== 0){
    //         //return
    //         //make sure they are admin
    //     }else if(this.props.currentUser.role.role === 'user'){
    //         this.getReimbursemntForUser(this.props.currentUser.userId)

    //     }else {
    //         //they weren't admin so do nothing
    //         //return
    //     }
    // }

    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getReimbursementsByIdActionMapper(this.state.viewUserReimbursementId)
    }

    getReimbursemntForUser = async (e: number) => {

        this.props.getReimbursementsByIdActionMapper(e)

        this.setState({
            viewUserReimbursementId: e,
        })

    }

    updateId = (e: any) => {
        this.setState({
            viewUserReimbursementId: e.currentTarget.value
        })
    }

    render() {
        let reimbursementDisplay = this.props.allReimbursements.map((ele) => {
            return <ReimbursementInfoComponent currentReimbursement={ele} key={ele.reimbursementId} />
        })
        console.log(this.props.allReimbursements)

        if (this.props.currentUser.role.role === 'admin' || this.props.currentUser.role.role === 'finance-manager') {
            return (
                !this.props.allReimbursements.length ?
                    <Form onSubmit={this.submitId}>
                        <FormGroup>
                            <Label for="searchId">ID Value</Label>
                            <Input onChange={this.updateId} type="number" placeholder="Enter a user Id" required />
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
        } else if (this.props.currentUser.role.role === 'user') {
            return (
                this.props.allReimbursements.length ?
                    <CardDeck elementsPerRow={4}>
                        {reimbursementDisplay}
                    </CardDeck>
                    :
                    <h1>You have no Reimbursements</h1>
            )
        } else {
            return (
                <Redirect to='/user-info' />
            )
        }
    }
}