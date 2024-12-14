
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Draggable from 'react-draggable'; // The default
import 'react-edit-text/dist/index.css';
import TextArea from '../TextArea';

function ListItem() {

    const navigate  = useNavigate();
    const nodeRef = React.useRef(null);

    const [listData, setListData] = useState("Item")
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setListData(e.target.value);
    };

    return(

        <Draggable
            nodeRef={nodeRef}
            defaultPosition={{x: 0, y: 0}}
            handle=".itemHandle"

        >
            <div ref={nodeRef} className='draggingItem'>
                <table>
                    <tbody>
                    <tr>
                        <td>
                        <TextArea></TextArea>
                        </td>
                        <td>
                            <p style = {{width : "5vw"}} className='itemHandle' >O</p>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>
        </Draggable>    
    )
}

export default ListItem