
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Home() {
    const user = useSelector((state) => state.user.value)
    let loggedIn = false

    if(Object.keys(user).length){
        loggedIn = true
    }

    

    return(
        <div className = 'general'>
            <Header></Header>
            <h1>Welcome</h1>
            <Footer></Footer>
        </div>
        
    )

    
}

export default Home