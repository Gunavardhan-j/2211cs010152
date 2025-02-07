import React from 'react';

function Greeting({isLoggedIn}){
    if(isLoggedIn){
        return <h1> Welcome back!</h1>
    }else{
        return <h1>Please login</h1>
    }
}
export default Greeting;