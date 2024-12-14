
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";

function Footer() {
    const user = useSelector((state) => state.user.value)
    let loggedIn = false

    if(Object.keys(user).length){
        loggedIn = true
    }

    

    return(
        <div>
           
        </div>
        
    )

    
}

export default Footer