
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import { createEditor } from 'slate';
import {Editable, Slate, withReact} from 'slate-react';

const intialValue = [
    {
        type: 'paragraph',
        children: [{text: 'a line'}]
    }
]

function TextEditor() {
    const user = useSelector((state) => state.user.value)
    const [editor] = useState(()=>withReact(createEditor()))

    return(
        <div className = 'general'>
            <Slate editor = {editor} value = {intialValue}>
                <Editable/>
            </Slate>

        </div>
        
    )

    
}

export default TextEditor