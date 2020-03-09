

const devEnvironment={
    project0BaseUrl:'http://localhost:2002'
}

const prodEnvironment={
    project0BaseUrl:'ec2-18-222-178-46.us-east-2.compute.amazonaws.com:2002'
}

export let environment = prodEnvironment

if(process.env.REACT_APP_ENV==='production'){
    environment = prodEnvironment
}