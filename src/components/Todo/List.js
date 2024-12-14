
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Draggable from 'react-draggable'; // The default
import ListItem from './ListItem';
import TextArea from '../TextArea';


function List() {

    const navigate  = useNavigate();
    const nodeRef = React.useRef(null);

    const [listName, setListName] = useState("List Name")
    const [listItems, setListItems] = useState([0])

    let listItemsJSX = listItems.map((item, i) => {
        return (
            <tr key={`list_item_${i}`}>
                <td>
                    <ListItem />
                </td>
            </tr>
        );
    });
    
    const createItem =() => {
        setListItems((prevList) => [...prevList, 0]);
    }

    return(

        // <h1>LIST</h1>        

        <Draggable
            nodeRef={nodeRef}
            // axis="x"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            // position={null}
            // grid={[25, 25]}
            // scale={1}
            // onStart={this.handleStart}
            // onDrag={this.handleDrag}
            // onStop={this.handleStop}
        >
            <div ref={nodeRef} className='draggingList' >
                <table style={{width:"20vw"}}>
                    <thead>
                    <tr>
                        <th key={`list_head`} style={{textDecoration: "underline"}}><TextArea></TextArea></th>
                        <th onClick={createItem}> + </th>
                        <th className='handle'> O </th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItemsJSX}
                    </tbody>
                </table>
                

            </div>
        </Draggable>    
    )

    
}

export default List