
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import {
    Link
  } from "react-router-dom";
import Header from './Header';
import About from './AboutMe';
import { colors } from '../assets/styles';
import Footer from './Footer';
import Contact from './ContactMe';
import Draggable from 'react-draggable'; // The default


function List() {

    const navigate  = useNavigate();
    const nodeRef = React.useRef(null);

    return(

        // <h1>LIST</h1>        

        <Draggable
            nodeRef={nodeRef}
            // axis="x"
            // handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            // position={null}
            grid={[25, 25]}
            // scale={1}
            // onStart={this.handleStart}
            // onDrag={this.handleDrag}
            // onStop={this.handleStop}
        >
            <div ref={nodeRef} className='draggingLabel'>I can now be moved around!</div>
        </Draggable>    
    )

    
}

export default List