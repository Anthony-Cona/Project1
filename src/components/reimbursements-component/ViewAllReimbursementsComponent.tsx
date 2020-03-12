import React from 'react'
import { User } from '../../models/User';
import { CardDeck } from '../general-components/card-deck-component/CardDeckComponent';
import { UserInfoComponent } from '../user-info/UserInfoComponent';
import { Redirect } from 'react-router';
import { ReimbursementInfoComponent } from '../reimbursement-info/ReimbursementInfoComponent';
import { Reimbursement } from '../../models/Reimbursement';

interface IViewAllReimbursementsProps {
    currentUser:User
    currentReimbursement:Reimbursement
    allReimbursements:Reimbursement[]
    errorMessage:string
    getAllReimbursementsActionMapper: ()=>void
}


export class ViewAllReimbursementsComponent extends React.Component<IViewAllReimbursementsProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // check to see if we already have users (redux store)
        if(this.props.allReimbursements.length !== 0){
            //return
            //make sure they are admin
        }else if(this.props.currentUser.role.role === 'admin'||this.props.currentUser.role.role === 'finance-manager'){
            console.log('call getAll users mapper?');
            
            this.props.getAllReimbursementsActionMapper()
        }else {
            //they weren't admin so do nothing
            //return
        }
    }

    render(){
        //turn array of users into display components
        let reimbursementDisplay = this.props.allReimbursements.map((ele)=>{
            return <ReimbursementInfoComponent currentReimbursement={ele} key={ele.reimbursementId}/>
        })
        console.log(this.props.allReimbursements)
        return(
            // check for role or redirect
            this.props.currentUser.role.role === 'admin'||this.props.currentUser.role.role === 'finance-manager'?
            <CardDeck elementsPerRow={4}>
                {reimbursementDisplay}
            </CardDeck>
            :
            <Redirect to='/'/>
        )
    }
}